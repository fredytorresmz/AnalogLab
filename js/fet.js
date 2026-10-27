/**
 * AnalogLab - Módulo FET & MOSFET
 * Análisis DC, curvas de transferencia, selección de raíces, pequeña señal AC y conmutación eficiente.
 */
(() => {
  "use strict";
  const { $, $$ } = window.AL;

  // Utilidad de trazado SVG
  function pathPts(pts, x, y) {
    return pts.map((p, i) => `${i ? 'L' : 'M'}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ');
  }

  // ==========================================
  // 1. SIMULADOR DE POLARIZACIÓN Y CURVA ID-VGS
  // ==========================================
  function getFetParams() {
    return {
      Vdd: +$('#fetVdd')?.value || 24,
      R1: +$('#fetR1')?.value || 22,    // MΩ
      R2: +$('#fetR2')?.value || 10,    // MΩ
      Rd: +$('#fetRd')?.value || 1.8,   // kΩ
      Rs: +$('#fetRs')?.value || 0.82,  // kΩ
      Vth: +$('#fetVth')?.value || 2.5, // V
      k: +$('#fetK')?.value || 0.80     // mA/V^2
    };
  }

  function solveEMosfetDC(p) {
    // 1. Voltaje de compuerta (divisor sin carga porque IG = 0)
    const Vg = p.Vdd * (p.R2 / (p.R1 + p.R2));

    // Si Vg < Vth, el transistor nunca enciende con Rs >= 0
    if (Vg <= p.Vth) {
      return {
        Vg,
        Vgs: Vg,
        Id: 0,
        Vds: p.Vdd,
        Vdssat: 0,
        gm: 0,
        region: 'corte',
        rejectedRoot: null,
        desc: 'Compuerta por debajo del umbral: el canal de inversión no se forma.'
      };
    }

    // Ecuación cuadrática: ID = k * ((Vg - ID*Rs) - Vth)^2
    // k * Rs^2 * ID^2 - [2*k*Rs*(Vg - Vth) + 1] * ID + k*(Vg - Vth)^2 = 0
    // con ID en mA, Rs en kΩ -> ID*Rs en V
    const Vx = Vg - p.Vth;
    const a = p.k * Math.pow(p.Rs, 2);
    const b = -(2 * p.k * p.Rs * Vx + 1);
    const c = p.k * Math.pow(Vx, 2);

    const disc = b * b - 4 * a * c;
    if (disc < 0) {
      return {
        Vg, Vgs: 0, Id: 0, Vds: p.Vdd, Vdssat: 0, gm: 0, region: 'corte',
        rejectedRoot: null, desc: 'Sin solución real para la ecuación cuadrática.'
      };
    }

    const sqrtDisc = Math.sqrt(disc);
    const id1 = (-b + sqrtDisc) / (2 * a);
    const id2 = (-b - sqrtDisc) / (2 * a);

    const vgs1 = Vg - id1 * p.Rs;
    const vgs2 = Vg - id2 * p.Rs;

    // Criterio físico de descarte de Boylestad & Malvino:
    // Para E-MOSFET, la conducción exige Vgs > Vth.
    // La raíz que produzca Vgs < Vth es una solución parásita matemática.
    let validId, validVgs, rejectedId, rejectedVgs, rejectReason;

    if (vgs1 >= p.Vth && vgs2 < p.Vth) {
      validId = id1; validVgs = vgs1;
      rejectedId = id2; rejectedVgs = vgs2;
      rejectReason = `Produce V_GS = ${vgs2.toFixed(2)} V < V_GS(th) = ${p.Vth.toFixed(2)} V`;
    } else if (vgs2 >= p.Vth && vgs1 < p.Vth) {
      validId = id2; validVgs = vgs2;
      rejectedId = id1; rejectedVgs = vgs1;
      rejectReason = `Produce V_GS = ${vgs1.toFixed(2)} V < V_GS(th) = ${p.Vth.toFixed(2)} V`;
    } else {
      // Ambas raíces dan Vgs >= Vth: escoger la que no sature la fuente en la malla de salida
      validId = Math.min(id1, id2);
      validVgs = Vg - validId * p.Rs;
      rejectedId = Math.max(id1, id2);
      rejectedVgs = Vg - rejectedId * p.Rs;
      rejectReason = `Produce caída excesiva en la malla de salida`;
    }

    // Caída en malla de salida
    const Vds = p.Vdd - validId * (p.Rd + p.Rs);
    const Vdssat = validVgs - p.Vth;

    let region = 'saturacion';
    let desc = 'Saturación confirmada (V_DS >= V_GS - V_GS(th)). El canal está estrangulado en el drenador.';

    if (Vds < Vdssat && Vds > 0) {
      region = 'triodo';
      desc = 'Operación en región Óhmica/Triodo (V_DS < V_GS - V_GS(th)). Canal no estrangulado.';
    } else if (Vds <= 0) {
      region = 'corte-extremo';
      desc = 'Malla de salida colapsada: corriente excesiva para las resistencias seleccionadas.';
    }

    // Transconductancia gm = 2 * k * (Vgs - Vth) = 2 * sqrt(k * Id) en mS
    const gm = 2 * p.k * (validVgs - p.Vth);

    return {
      Vg,
      Vgs: validVgs,
      Id: validId,
      Vds,
      Vdssat,
      gm,
      region,
      rejectedRoot: { id: rejectedId, vgs: rejectedVgs, reason: rejectReason },
      desc
    };
  }

  function drawTransferCurve(p, sol) {
    const el = $('#fetCurveChart');
    if (!el) return;

    const maxVgs = Math.max(10, p.Vdd * 0.6);
    const maxId = Math.max(8, p.k * Math.pow(maxVgs - p.Vth, 2) * 0.4);

    const a = window.AL.axes(0, maxVgs, 0, maxId, 'V_GS (V)', 'I_D (mA)');
    let h = a.h;

    // Región de corte Vgs < Vth sombreada
    const vthX = a.x(p.Vth);
    h += `<rect x="${a.x(0)}" y="${a.T}" width="${Math.max(0, vthX - a.x(0))}" height="${a.gh}" fill="var(--red2)" opacity="0.35"/>`;
    h += `<text x="${(a.x(0) + vthX) / 2}" y="${a.T + 20}" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="bold">CORTE (V_GS < V_th)</text>`;

    // Curva de transferencia teórica ID = k*(Vgs - Vth)^2
    let curvePts = [];
    for (let v = p.Vth; v <= maxVgs; v += 0.1) {
      const id = p.k * Math.pow(v - p.Vth, 2);
      if (id <= maxId * 1.05) {
        curvePts.push([v, id]);
      }
    }
    if (curvePts.length > 1) {
      h += `<path d="${pathPts(curvePts, a.x, a.y)}" fill="none" stroke="var(--blue)" stroke-width="3"/>`;
    }

    // Recta de carga de compuerta: Vgs = Vg - Id * Rs  => Id = (Vg - Vgs) / Rs
    let loadPts = [];
    const idAtVgsZero = sol.Vg / p.Rs;
    loadPts.push([0, idAtVgsZero]);
    loadPts.push([sol.Vg, 0]);
    h += `<path d="${pathPts(loadPts, a.x, a.y)}" fill="none" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="6,4"/>`;

    // Punto Q
    if (sol.region !== 'corte' && sol.Vgs <= maxVgs && sol.Id <= maxId) {
      const qx = a.x(sol.Vgs);
      const qy = a.y(sol.Id);

      // Líneas punteadas hacia los ejes
      h += `<line x1="${qx}" y1="${qy}" x2="${qx}" y2="${a.T + a.gh}" stroke="var(--red)" stroke-dasharray="3,3" stroke-width="1.5"/>`;
      h += `<line x1="${qx}" y1="${qy}" x2="${a.x(0)}" y2="${qy}" stroke="var(--red)" stroke-dasharray="3,3" stroke-width="1.5"/>`;

      h += `<circle cx="${qx}" cy="${qy}" r="7" fill="var(--red)"/>`;
      h += `<text x="${qx + 12}" y="${qy - 10}" fill="var(--red)" font-size="13" font-weight="bold">Q (${sol.Vgs.toFixed(2)} V, ${sol.Id.toFixed(2)} mA)</text>`;
    }

    // Raíz descartada (si entra en el gráfico)
    if (sol.rejectedRoot && sol.rejectedRoot.vgs >= 0 && sol.rejectedRoot.vgs <= maxVgs && sol.rejectedRoot.id <= maxId) {
      const rx = a.x(sol.rejectedRoot.vgs);
      const ry = a.y(sol.rejectedRoot.id);
      h += `<circle cx="${rx}" cy="${ry}" r="6" fill="none" stroke="var(--muted)" stroke-width="2"/>`;
      h += `<line x1="${rx - 5}" y1="${ry - 5}" x2="${rx + 5}" y2="${ry + 5}" stroke="var(--red)" stroke-width="2"/>`;
      h += `<line x1="${rx - 5}" y1="${ry + 5}" x2="${rx + 5}" y2="${ry - 5}" stroke="var(--red)" stroke-width="2"/>`;
      h += `<text x="${rx + 10}" y="${ry + 15}" fill="var(--muted)" font-size="11">Raíz descartada (${sol.rejectedRoot.vgs.toFixed(1)} V)</text>`;
    }

    el.innerHTML = h;
  }

  function updateFetSim() {
    const p = getFetParams();

    // Actualizar labels de sliders
    $('#fetVddTxt') && ($('#fetVddTxt').textContent = p.Vdd.toFixed(1));
    $('#fetR1Txt') && ($('#fetR1Txt').textContent = p.R1.toFixed(1));
    $('#fetR2Txt') && ($('#fetR2Txt').textContent = p.R2.toFixed(1));
    $('#fetRdTxt') && ($('#fetRdTxt').textContent = p.Rd.toFixed(2));
    $('#fetRsTxt') && ($('#fetRsTxt').textContent = p.Rs.toFixed(2));
    $('#fetVthTxt') && ($('#fetVthTxt').textContent = p.Vth.toFixed(2));
    $('#fetKTxt') && ($('#fetKTxt').textContent = p.k.toFixed(2));

    const sol = solveEMosfetDC(p);

    // Actualizar lecturas en pantalla
    $('#fetResVg') && ($('#fetResVg').textContent = sol.Vg.toFixed(2) + ' V');
    $('#fetResVgs') && ($('#fetResVgs').textContent = sol.Vgs.toFixed(2) + ' V');
    $('#fetResId') && ($('#fetResId').textContent = sol.Id.toFixed(2) + ' mA');
    $('#fetResVds') && ($('#fetResVds').textContent = sol.Vds.toFixed(2) + ' V');
    $('#fetResVdssat') && ($('#fetResVdssat').textContent = sol.Vdssat.toFixed(2) + ' V');
    $('#fetResGm') && ($('#fetResGm').textContent = sol.gm.toFixed(2) + ' mS');

    // Ganancia aproximada Av = -gm * (Rd || r_load)
    const av = -sol.gm * p.Rd;
    $('#fetResAv') && ($('#fetResAv').textContent = av.toFixed(2) + ' (V/V)');

    // Estado / Región
    const st = $('#fetState');
    if (st) {
      if (sol.region === 'corte') {
        st.className = 'status-card off';
        st.innerHTML = '<b>CORTE</b><span>' + sol.desc + '</span>';
      } else if (sol.region === 'triodo') {
        st.className = 'status-card danger';
        st.innerHTML = '<b>REGIÓN ÓHMICA / TRIODO</b><span>' + sol.desc + '</span>';
      } else {
        st.className = 'status-card ok';
        st.innerHTML = '<b>SATURACIÓN (ACTIVA)</b><span>' + sol.desc + '</span>';
      }
    }

    // Explicación de la raíz descartada
    const rEl = $('#fetRootExplanation');
    if (rEl && sol.rejectedRoot) {
      rEl.innerHTML = `<strong>Criterio de Raíces:</strong> La matemática cuadrática arroja dos raíces:
        <span style="color:var(--green);font-weight:bold;">$I_{DQ} = ${sol.Id.toFixed(2)}\\text{ mA}$ ($V_{GS} = ${sol.Vgs.toFixed(2)}\\text{ V}$)</span> y
        <span style="color:var(--red);text-decoration:line-through;">$I_{D2} = ${sol.rejectedRoot.id.toFixed(2)}\\text{ mA}$ ($V_{GS} = ${sol.rejectedRoot.vgs.toFixed(2)}\\text{ V}$)</span>.
        Se descarta $I_{D2}$ porque <em>${sol.rejectedRoot.reason}</em>, lo que viola la condición física del canal inducido.`;
      window.AL.typeset(rEl);
    }

    drawTransferCurve(p, sol);
  }

  // Event listeners para sliders
  ['fetVdd', 'fetR1', 'fetR2', 'fetRd', 'fetRs', 'fetVth', 'fetK'].forEach(id => {
    $('#' + id)?.addEventListener('input', updateFetSim);
  });

  // ==========================================
  // 2. COMPARADOR TÉRMICO BJT VS MOSFET (POTENCIA)
  // ==========================================
  function updatePowerComparison() {
    const iLoad = +$('#pwrCurrent')?.value || 10; // Amperios
    $('#pwrCurrentTxt') && ($('#pwrCurrentTxt').textContent = iLoad.toFixed(1) + ' A');

    // 1. BJT de Potencia (TIP35C): Vce(sat) ≈ 1.2V constante
    const vceSat = 1.2;
    const pBjt = iLoad * vceSat; // Watts

    // 2. MOSFET Estándar (IRFZ44N): Rds(on) = 17.5 mΩ = 0.0175 Ω
    const rdsStandard = 0.0175;
    const pMosStandard = Math.pow(iLoad, 2) * rdsStandard;

    // 3. MOSFET Ultra-Bajo Rds(on) (IPP015N04N): Rds(on) = 1.5 mΩ = 0.0015 Ω
    const rdsModern = 0.0015;
    const pMosModern = Math.pow(iLoad, 2) * rdsModern;

    // Actualizar textos
    $('#pwrBjt') && ($('#pwrBjt').textContent = pBjt.toFixed(2) + ' W');
    $('#pwrMosStd') && ($('#pwrMosStd').textContent = pMosStandard.toFixed(2) + ' W');
    $('#pwrMosMod') && ($('#pwrMosMod').textContent = pMosModern.toFixed(2) + ' W');

    // Estimación de elevación térmica aproximada sin disipador (RthJA ≈ 62 °C/W para TO-220 al aire)
    const rthJA = 62;
    const tAmb = 25;
    const tBjt = tAmb + pBjt * rthJA;
    const tMosMod = tAmb + pMosModern * rthJA;

    const tEl = $('#pwrThermalDiag');
    if (tEl) {
      if (tBjt > 150) {
        tEl.innerHTML = `<span style="color:var(--red);font-weight:bold;">¡PELIGRO TÉRMICO BJT!</span> A ${iLoad} A, el BJT alcanzaría teóricamente <strong>${tBjt.toFixed(0)} °C</strong> (se funde sin un disipador gigante y ventilador). En cambio, el MOSFET moderno solo disipa <strong>${pMosModern.toFixed(2)} W</strong> alcanzando apenas <strong>${tMosMod.toFixed(1)} °C</strong>: ¡opera tibio sin disipador!`;
      } else {
        tEl.innerHTML = `A ${iLoad} A, el MOSFET moderno ahorra ${(pBjt - pMosModern).toFixed(2)} W comparado con el BJT (${((1 - pMosModern / pBjt) * 100).toFixed(1)}% de reducción de disipación).`;
      }
    }
  }

  $('#pwrCurrent')?.addEventListener('input', updatePowerComparison);

  // ==========================================
  // 3. DIAGNÓSTICO DE COMPUERTAS 3.3V / 5V
  // ==========================================
  const mcuData = {
    'esp32': { name: 'ESP32 / ESP8266', vout: 3.3, maxI: 12 },
    'arduino': { name: 'Arduino Uno / Nano (ATmega328P)', vout: 5.0, maxI: 20 },
    'pico': { name: 'Raspberry Pi Pico (RP2040)', vout: 3.3, maxI: 12 },
    'stm32': { name: 'STM32 (ARM Cortex-M)', vout: 3.3, maxI: 8 }
  };

  const mosfetData = {
    'irfz44n': {
      name: 'IRFZ44N (Estándar 10V Gate)',
      vthMin: 2.0, vthMax: 4.0, vgsFull: 10.0, rdsNominal: '17.5 mΩ (a 10V)',
      type: 'standard',
      notes: 'No es Logic-Level. Con 3.3V apenas entra en conducción tenue (< 1A) con Rds de varios ohmios. ¡Se quemará si conmuta carga!'
    },
    'irlz44n': {
      name: 'IRLZ44N (Logic-Level L)',
      vthMin: 1.0, vthMax: 2.0, vgsFull: 4.5, rdsNominal: '22 mΩ (a 4.5V) / 35 mΩ (a 3.3V)',
      type: 'logic',
      notes: '¡Totalmente compatible con microcontroladores! Satura con 3.3V y 5V sin riesgo de sobrecalentamiento.'
    },
    '2n7000': {
      name: '2N7000 (Pequeña señal Logic-Level)',
      vthMin: 0.8, vthMax: 3.0, vgsFull: 4.5, rdsNominal: '1.2 Ω a 5V (máx 200 mA)',
      type: 'logic-small',
      notes: 'Ideal para señales de control, relés miniatura o conmutación lógica rápida a 3.3V y 5V.'
    },
    'irf540n': {
      name: 'IRF540N (Estándar 100V)',
      vthMin: 2.0, vthMax: 4.0, vgsFull: 10.0, rdsNominal: '44 mΩ (a 10V)',
      type: 'standard',
      notes: 'Requiere $V_{GS} = 10\\text{ V}$ obligatorios. Requiere driver intermediario (ej. TC4420 o un BJT previo).'
    }
  };

  function updateMcuCheck() {
    const mcuKey = $('#mcuSelect')?.value || 'esp32';
    const mosKey = $('#mosSelect')?.value || 'irfz44n';

    const mcu = mcuData[mcuKey];
    const mos = mosfetData[mosKey];

    const outEl = $('#mcuDiagOut');
    if (!outEl) return;

    let isSafe = false;
    if (mos.type.startsWith('logic')) {
      if (mcu.vout >= 4.5 || (mosKey === 'irlz44n' && mcu.vout >= 3.0)) {
        isSafe = true;
      }
    }

    let html = `<h4>Diagnóstico de Conexión Directa: ${mcu.name} → ${mos.name}</h4>`;
    html += `<p>• <strong>Voltaje GPIO entregado:</strong> ${mcu.vout} V</p>`;
    html += `<p>• <strong>Requisito de saturación completa del MOSFET:</strong> $V_{GS} \\ge ${mos.vgsFull}\\text{ V}$</p>`;
    html += `<p>• <strong>Resistencia de canal esperada:</strong> ${mos.rdsNominal}</p>`;

    if (isSafe) {
      html += `<div class="status-card ok" style="margin-top:12px;">
        <b>✓ COMPATIBILIDAD APROBADA</b>
        <span>El transistor es Logic-Level. Con los ${mcu.vout} V del ${mcu.name}, el canal se abre plenamente en saturación con baja resistencia interna.</span>
      </div>`;
    } else {
      html += `<div class="status-card danger" style="margin-top:12px;">
        <b>⚠️ ALERTA DE DISEÑO CRÍTICA</b>
        <span>${mos.notes} Para gobernar este MOSFET desde ${mcu.vout} V se debe emplear un <em>gate driver</em> (ej. TC4420, IR2104) o un transistor BJT previo como convertidor de nivel a 10 V o 12 V.</span>
      </div>`;
    }

    outEl.innerHTML = html;
    window.AL.typeset(outEl);
  }

  $('#mcuSelect')?.addEventListener('change', updateMcuCheck);
  $('#mosSelect')?.addEventListener('change', updateMcuCheck);

  // Inicializar todo al cargar
  setTimeout(() => {
    updateFetSim();
    updatePowerComparison();
    updateMcuCheck();
  }, 100);

})();
