(() => {
  "use strict";

  const { $, $$ } = window.AL;
  const wrapTheory = $('#tallerBjtAcList');
  const pa = $('#practicalAnswersBjtAc');
  const wrapRetos = $('#retosContainer');
  const theoryQuestions = window.TALLER_BJT_AC_TEORICO || [];
  const practicalAnswers = window.RESPUESTAS_TALLER_BJT_AC || [];
  const retos = window.RETOS_BJT_AC || [];

  // =========================================================================
  // FASE 1: CALENTAMIENTO Y PREGUNTAS TEÓRICAS INTERACTIVAS
  // =========================================================================
  if (wrapTheory && theoryQuestions.length) {
    theoryQuestions.forEach(item => {
      let el = document.createElement('article');
      el.className = 'taller-item';

      let input = item.type === 'open'
        ? '<textarea class="response" placeholder="Escribe tu razonamiento físico, deducción o respuesta con tus palabras..."></textarea>'
        : item.type === 'numeric'
          ? `<div class="grid2"><input class="num" type="number" step="any" placeholder="Resultado numérico"><div class="panel"><b>Unidad:</b> ${item.unit}</div></div>`
          : `<div class="options">${item.options.map((o, i) => `<button data-i="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}</div>`;

      el.innerHTML = `
        <span class="eyebrow">${item.section} · Pregunta ${item.n}</span>
        <h3>${item.prompt}</h3>
        ${input}
        <div class="buttons">
          <button class="btn small h1">Pista 1</button>
          <button class="btn small h2">Pista 2</button>
          <button class="btn small primary attempt">Registrar / comprobar</button>
          <button class="btn small guideBtn" disabled>Respuesta orientativa</button>
        </div>
        <p class="feedback"></p>
        <div class="hint hint1"></div>
        <div class="hint hint2"></div>
        <div class="guide"></div>
      `;

      let attempted = false;
      const fb = $('.feedback', el);
      const g = $('.guide', el);
      const gb = $('.guideBtn', el);

      $('.h1', el).addEventListener('click', () => {
        let e = $('.hint1', el);
        e.innerHTML = item.h1 || 'Revisa el concepto físico en bjt-ac.html.';
        window.AL.typeset(e);
        e.classList.toggle('show');
      });

      $('.h2', el).addEventListener('click', () => {
        let e = $('.hint2', el);
        e.innerHTML = item.h2 || 'Comprueba las ecuaciones de los libros de texto.';
        window.AL.typeset(e);
        e.classList.toggle('show');
      });

      if (item.type === 'mcq') {
        $$('.options button', el).forEach(b => b.addEventListener('click', () => {
          el.dataset.choice = b.dataset.i;
          fb.innerHTML = item.feedback[+b.dataset.i];
          window.AL.typeset(fb);
          fb.className = 'feedback ' + (+b.dataset.i === item.answer ? 'ok' : 'bad');
        }));
      }

      $('.attempt', el).addEventListener('click', () => {
        let okAttempt = false;
        if (item.type === 'open') {
          okAttempt = $('.response', el).value.trim().length >= 8;
        } else if (item.type === 'numeric') {
          let x = parseFloat($('.num', el).value);
          okAttempt = Number.isFinite(x);
          if (okAttempt) {
            let ok = Math.abs(x - item.answer) <= (item.tol || 0.05);
            window.AL.fb(fb, (ok ? 'Resultado correcto. ' : 'Revisa el cálculo. ') + item.guide, ok);
          }
        } else {
          okAttempt = el.dataset.choice !== undefined;
        }

        if (!okAttempt) {
          window.AL.fb(fb, 'Registra primero un razonamiento o selecciona una opción.', false);
          return;
        }
        attempted = true;
        gb.disabled = false;
        $('.attempt', el).textContent = '✓ Intento registrado';
      });

      gb.addEventListener('click', () => {
        if (!attempted) return;
        g.innerHTML = item.guide;
        window.AL.typeset(g);
        g.classList.toggle('show');
      });

      wrapTheory.appendChild(el);
      window.AL.typeset(el);
    });
  }

  // =========================================================================
  // FASE 2: EJERCICIOS GUIADOS CON ESQUEMÁTICOS Y SOLUCIONARIO DUAL
  // =========================================================================
  function renderPractical(filterGroup = 'all', searchQuery = '') {
    if (!pa) return;

    let filtered = practicalAnswers;
    if (filterGroup !== 'all') {
      filtered = filtered.filter(x => x.group.startsWith(filterGroup));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(x =>
        x.title.toLowerCase().includes(q) ||
        x.n.toLowerCase().includes(q) ||
        (x.context && x.context.toLowerCase().includes(q)) ||
        (x.datos && x.datos.toLowerCase().includes(q)) ||
        (x.analysis && x.analysis.toLowerCase().includes(q)) ||
        x.group.toLowerCase().includes(q)
      );
    }

    if (!filtered.length) {
      pa.innerHTML = '<p class="muted">No se encontraron ejercicios con ese criterio de búsqueda.</p>';
      return;
    }

    const groups = [...new Set(filtered.map(x => x.group))];
    pa.innerHTML = groups.map(group => {
      const items = filtered.filter(x => x.group === group).map(x => `
        <details class="${x.warning ? 'answer-warning' : ''} practical-item" id="item-${x.n}">
          <summary><b>${x.n}</b> · ${x.title}</summary>
          <div class="answer-detail">
            ${x.context ? `
              <div class="problem-context-box">
                <span class="context-tag">🏭 Contexto de Ingeniería & Aplicación</span>
                <p class="context-desc">${x.context}</p>
              </div>
            ` : ''}

            ${x.image ? `
              <figure class="ac-figure" style="margin: 14px 0; text-align: center;">
                <img loading="lazy" src="${x.image}" alt="${x.title}" style="max-width: 100%; height: auto; border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <figcaption style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">Esquemático correspondiente a ${x.n} · Topología en simulación</figcaption>
              </figure>
            ` : ''}

            ${x.datos ? `
              <div class="circuit-data-box">
                <div class="box-title">📋 Parámetros y Datos Conocidos del Circuito:</div>
                <div class="box-body">${x.datos}</div>
              </div>
            ` : ''}

            ${x.preguntas && x.preguntas.length ? `
              <div class="target-questions-box">
                <div class="box-title">🎯 Enunciado / Objetivos que debe calcular el estudiante:</div>
                <ol class="target-questions-list">
                  ${x.preguntas.map(p => `<li>${p}</li>`).join('')}
                </ol>
              </div>
            ` : ''}

            <div class="reference-answer-box">
              <span class="ref-title">💡 Resultados de Referencia:</span>
              <div class="formula">${x.answer}</div>
            </div>

            <details class="analysis-detail" open>
              <summary>📘 Ver Desarrollo Matemático Paso a Paso (Modelos \\(r_e\\) e Híbrido-\\(\\pi\\))</summary>
              <div class="analysis-body">${x.analysis || ''}</div>
            </details>
          </div>
        </details>
      `).join('');
      return `<div class="answer-group"><h3>${group}</h3>${items}</div>`;
    }).join('');

    window.AL.typeset(pa);
  }

  // Render inicial de ejercicios guiados
  renderPractical();

  // Filtros por bloque
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const g = btn.dataset.group;
      const q = $('#searchExercises') ? $('#searchExercises').value : '';
      renderPractical(g, q);
    });
  });

  // Búsqueda en tiempo real
  const searchInput = $('#searchExercises');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeBtn = $('.filter-btn.active');
      const g = activeBtn ? activeBtn.dataset.group : 'all';
      renderPractical(g, searchInput.value);
    });
  }

  // Botón para expandir/colapsar todos
  const btnToggleAll = $('#btnToggleAll');
  if (btnToggleAll) {
    let allOpen = true;
    btnToggleAll.addEventListener('click', () => {
      allOpen = !allOpen;
      $$('details.practical-item', pa).forEach(d => d.open = allOpen);
      btnToggleAll.textContent = allOpen ? 'Colapsar todos' : 'Expandir todos';
    });
  }

  // =========================================================================
  // FASE 3: ZONA DE RETOS DE EXAMEN (AUTÓNOMOS CON SOLUCIÓN BLOQUEADA)
  // =========================================================================
  if (wrapRetos && retos.length) {
    wrapRetos.innerHTML = retos.map(reto => `
      <article class="reto-card" id="${reto.id}" style="border: 2px solid #dc2626; border-radius: 10px; padding: 18px; margin-bottom: 24px; background: #ffffff; box-shadow: 0 4px 12px rgba(220,38,38,0.08);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <span class="badge" style="background:#fee2e2; color:#b91c1c; font-weight:bold; font-size:0.9rem;">${reto.badge}</span>
          <span style="font-weight:bold; color:#64748b;">${reto.id}</span>
        </div>
        <h3 style="color:#b91c1c; margin: 10px 0 6px 0; font-size: 1.25rem;">${reto.title}</h3>
        <p style="font-size: 0.98rem; line-height: 1.5; color: #1e293b;">${reto.context}</p>

        ${reto.image ? `
          <figure class="ac-figure" style="margin: 14px 0; text-align: center;">
            <img loading="lazy" src="${reto.image}" alt="${reto.title}" style="max-width: 100%; height: auto; border: 2px solid #fca5a5; border-radius: 8px; box-shadow: 0 3px 10px rgba(185,28,28,0.1);">
          </figure>
        ` : ''}

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin: 12px 0;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: #0f172a;">📋 Componentes y Parámetros del Circuito:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 6px; font-size: 0.88rem;">
            ${Object.entries(reto.circuitData).map(([k, v]) => `<div><b>${k}:</b> ${v}</div>`).join('')}
          </div>
        </div>

        <div style="background: #fff8f8; border: 1px solid #fed7d7; border-radius: 8px; padding: 14px; margin: 14px 0;">
          <h4 style="margin: 0 0 10px 0; color: #991b1b; font-size: 1rem;">✍️ Tus Objetivos de Cálculo (Resuelve en tu cuaderno y valida aquí):</h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${reto.targets.map(t => `
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <label style="flex:1; min-width:240px; font-size:0.92rem;"><b>${t.label}:</b></label>
                <input type="number" step="any" class="reto-input" data-target="${t.name}" data-expected="${t.expected}" data-tol="${t.tol}" placeholder="Tu resultado" style="width:160px; padding:6px 10px; border:1px solid #cbd5e1; border-radius:6px;">
                <span class="reto-fb" id="fb-${reto.id}-${t.name}" style="font-size:0.85rem; font-weight:bold;"></span>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 14px; display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn small primary btn-check-reto" data-reto="${reto.id}">✓ Validar mis cálculos</button>
            ${reto.hints.map((h, i) => `
              <button class="btn small btn-hint-reto" data-hint="hint-${reto.id}-${i}">Pista ${i + 1}</button>
            `).join('')}
          </div>
          ${reto.hints.map((h, i) => `
            <div id="hint-${reto.id}-${i}" class="hint" style="margin-top:8px;">${h}</div>
          `).join('')}
        </div>

        <details class="solution-details" style="margin-top: 14px; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; background: #fff;">
          <summary style="font-weight: bold; color: #0056b3; cursor: pointer;">
            🔓 Ver Solucionario Completo y Justificación de Examen (Desplegar al finalizar)
          </summary>
          <div style="padding-top: 12px; border-top: 1px solid #eee; margin-top: 10px;">
            ${reto.fullSolution}
          </div>
        </details>
      </article>
    `).join('');

    // Listener para validar cálculos de retos
    $$('.btn-check-reto', wrapRetos).forEach(btn => {
      btn.addEventListener('click', () => {
        const retoId = btn.dataset.reto;
        const card = document.getElementById(retoId);
        const inputs = $$('.reto-input', card);
        let allCorrect = true;

        inputs.forEach(inp => {
          const val = parseFloat(inp.value);
          const exp = parseFloat(inp.dataset.expected);
          const tol = parseFloat(inp.dataset.tol) || (exp * 0.1);
          const targetName = inp.dataset.target;
          const fbEl = document.getElementById(`fb-${retoId}-${targetName}`);

          if (isNaN(val)) {
            fbEl.textContent = 'Falta ingresar valor';
            fbEl.style.color = '#dc2626';
            allCorrect = false;
          } else if (Math.abs(val - exp) <= tol) {
            fbEl.textContent = '✓ Correcto';
            fbEl.style.color = '#16a34a';
          } else {
            fbEl.textContent = `✗ Revisa tu cálculo`;
            fbEl.style.color = '#dc2626';
            allCorrect = false;
          }
        });

        if (allCorrect) {
          const details = card.querySelector('details.solution-details');
          if (details) details.open = true;
        }
      });
    });

    // Listener para pistas de retos
    $$('.btn-hint-reto', wrapRetos).forEach(btn => {
      btn.addEventListener('click', () => {
        const hintEl = document.getElementById(btn.dataset.hint);
        if (hintEl) {
          hintEl.classList.toggle('show');
          window.AL.typeset(hintEl);
        }
      });
    });

    window.AL.typeset(wrapRetos);
  }

  // =========================================================================
  // BOTÓN IMPRIMIR / PDF
  // =========================================================================
  const btnPrintPdf = $('#btnPrintPdf');
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      $$('details', document).forEach(d => d.open = true);
      window.print();
    });
  }

})();
