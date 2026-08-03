/* 프로젝트 목록 렌더링 · 케이스 스터디 오버레이 · 스크롤 등장 효과 */

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

/* ── 1. work 목록 ─────────────────────────────────────────── */
const listEl = document.getElementById('projectList');

listEl.innerHTML = PROJECTS.map((p, i) => `
  <a class="project reveal" href="#case" data-i="${i}">
    <span class="p-idx">${esc(p.idx)}</span>
    <span class="p-mid cols">
      <span class="p-name-col">
        <span class="p-name">${esc(p.name)}</span>
        <span class="p-ko">${esc(p.ko)}</span>
      </span>
      <span class="p-desc-col">
        <span class="p-blurb">${esc(p.blurb)}</span>
        <span class="p-tags">
          ${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}
        </span>
      </span>
    </span>
    <span class="p-end">
      <span class="hide-sm">${esc(p.year)}</span>
      <span class="p-arrow">→</span>
    </span>
  </a>
`).join('');

/* 헤더 오른쪽 연도 범위는 데이터에서 자동으로 뽑습니다 */
const years = PROJECTS.map((p) => parseInt(p.year, 10)).filter(Number.isFinite);
if (years.length) {
  const lo = Math.min(...years);
  const hi = Math.max(...years);
  document.getElementById('workYears').textContent = lo === hi ? `${lo}` : `${lo} — ${hi}`;
}

/* ── 2. 케이스 스터디 오버레이 ────────────────────────────── */
const overlay = document.getElementById('caseOverlay');
let lastFocused = null;

function renderCase(p) {
  const meta = [
    { k: 'Role', v: p.role },
    { k: 'Timeline', v: p.span },
    { k: 'Team', v: p.team },
    { k: 'Stack', v: (p.tags || []).slice(0, 2).join(' · ') }
  ];

  overlay.innerHTML = `
    <div class="case-bar">
      <span class="mono-note">case study — ${esc(p.name)}</span>
      <button type="button" class="case-close">← close</button>
    </div>

    <div class="case-body">
      <div class="case-head">
        <span class="kicker">${esc(p.year)} · ${esc(p.role)}</span>
        <h1>${esc(p.name)}</h1>
        <p class="case-blurb">${esc(p.blurb)}</p>
        ${(p.links || []).length ? `
          <div class="case-links">
            ${p.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join('')}
          </div>` : ''}
        <div class="case-meta">
          ${meta.map((m) => `
            <div class="case-meta-cell">
              <span class="case-meta-k">${esc(m.k)}</span>
              <span class="case-meta-v">${esc(m.v) || '—'}</span>
            </div>`).join('')}
        </div>
      </div>

      <!-- ✏️ 이미지를 넣으려면 이 div를 <img class="case-shot" src="..." alt=""> 로 교체 -->
      <div class="case-shot-ph">
        <span>architecture diagram 16:9 — 이미지를 넣어주세요</span>
      </div>

      ${(p.sections || []).map((c) => `
        <div class="case-sec cols">
          <span class="case-sec-kicker">${esc(c.kicker)}</span>
          <div class="case-sec-body">
            <h2>${esc(c.title)}</h2>
            <p>${esc(c.body)}</p>
            ${c.metric ? `
              <div class="case-metric">
                <span class="case-metric-num">${esc(c.metric)}</span>
                <span class="case-metric-label">${esc(c.metricLabel)}</span>
              </div>` : ''}
          </div>
        </div>`).join('')}

      <div class="case-foot">
        <span>더 궁금한 점이 있다면 편하게 연락 주세요.</span>
        <a class="mail-btn small" href="mailto:loveyjs0420@gmail.com">email me ↗</a>
      </div>
    </div>
  `;

  overlay.querySelector('.case-close').addEventListener('click', closeCase);
}

function openCase(i) {
  lastFocused = document.activeElement;
  renderCase(PROJECTS[i]);
  overlay.hidden = false;
  overlay.scrollTop = 0;
  document.body.classList.add('locked');
  overlay.querySelector('.case-close').focus();
}

function closeCase() {
  overlay.hidden = true;
  overlay.innerHTML = '';
  document.body.classList.remove('locked');
  if (lastFocused) lastFocused.focus();
  // 주소창에 남은 #case 를 정리
  if (location.hash === '#case') history.replaceState(null, '', location.pathname + location.search);
}

listEl.addEventListener('click', (e) => {
  const row = e.target.closest('.project');
  if (!row) return;
  e.preventDefault();
  openCase(Number(row.dataset.i));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.hidden) closeCase();
});

/* ── 3. 스크롤하면 나타나는 효과 ──────────────────────────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    io.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ── 4. 푸터 연도 ─────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();
