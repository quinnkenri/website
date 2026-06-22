export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var theme =
          stored === 'light' || stored === 'dark'
            ? stored
            : window.matchMedia('(prefers-color-scheme: light)').matches
              ? 'light'
              : 'dark';
        if (theme === 'light') document.documentElement.classList.add('light');
      } catch (e) {}
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
