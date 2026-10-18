(() => {
  "use strict";

  const { $, $$ } = window.AL;
  const wrapTheory = $('#tallerBjtAcList');
  const pa = $('#practicalAnswersBjtAc');
  const theoryQuestions = window.TALLER_BJT_AC_TEORICO || [];
  const practicalAnswers = window.RESPUESTAS_TALLER_BJT_AC || [];

  // =========================================================================
  // 1. RENDERIZADO DE LA PARTE TEÓRICA INTERACTIVA
  // =========================================================================
  if (wrapTheory && theoryQuestions.length) {
    theoryQuestions.forEach(item => {
      let el = document.createElement('article');
      el.className = 'taller-item';

      let input = item.type === 'open'
        ? '<textarea class="response" placeholder="Escribe tu razonamiento físico, deducción o procedimiento con criterio de ingeniería..."></textarea>'
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
        e.innerHTML = item.h1 || 'Revisa el concepto físico de pequeña señal.';
        window.AL.typeset(e);
        e.classList.toggle('show');
      });

      $('.h2', el).addEventListener('click', () => {
        let e = $('.hint2', el);
        e.innerHTML = item.h2 || 'Comprueba las ecuaciones del modelo linealizado.';
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
  // 2. RENDERIZADO DE LOS EJERCICIOS PRÁCTICOS CON FILTROS Y BÚSQUEDA
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
        x.analysis.toLowerCase().includes(q) ||
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
            <p><b>Resultado de referencia:</b></p>
            <div class="formula">${x.answer}</div>
            <details class="analysis-detail" open>
              <summary>Ver desarrollo matemático y análisis de ingeniería</summary>
              <div>${x.analysis || ''}</div>
            </details>
          </div>
        </details>
      `).join('');
      return `<div class="answer-group"><h3>${group}</h3>${items}</div>`;
    }).join('');

    window.AL.typeset(pa);
  }

  // Render inicial
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

  // Botón Imprimir / PDF
  const btnPrintPdf = $('#btnPrintPdf');
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      // Abrir todos los detalles antes de imprimir
      $$('details', document).forEach(d => d.open = true);
      window.print();
    });
  }

})();
