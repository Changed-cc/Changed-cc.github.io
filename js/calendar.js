(function () {
  const el = document.getElementById('simple-calendar');
  if (!el) return;

  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const w = ['日','一','二','三','四','五','六'][now.getDay()];

  el.innerHTML = `
    <div class="cal-date">${y}-${m}-${d}</div>
    <div class="cal-week">星期${w}</div>
  `;
})();
