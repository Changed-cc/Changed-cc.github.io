document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('calendar')
  if (!el) return

  const today = new Date()
  el.innerHTML = `
    <div style="text-align:center;font-size:14px;">
      <strong>${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}</strong><br>
      ${today.toLocaleDateString('zh-CN', { weekday: 'long' })}
    </div>
  `
})
