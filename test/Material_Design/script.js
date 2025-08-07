document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const darkModeIcon = 'dark_mode';
  const lightModeIcon = 'wb_sunny';

  // 初始主题
  const storedTheme = localStorage.getItem('theme') || 'light';
  body.dataset.theme = storedTheme;
  themeToggleBtn.innerHTML = storedTheme === 'light' ? darkModeIcon : lightModeIcon;

  // 主题切换功能
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.dataset.theme = newTheme;
    themeToggleBtn.innerHTML = newTheme === 'light' ? darkModeIcon : lightModeIcon;
    localStorage.setItem('theme', newTheme);
  });
});
