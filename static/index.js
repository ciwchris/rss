function setTheme(theme, persist = false) {
    const on = theme;
    const off = theme === 'light' ? 'dark' : 'light'

    const htmlEl = document.documentElement;
    htmlEl.classList.add(on);
    htmlEl.classList.remove(off);

    if (persist) {
        localStorage.setItem('preferred-theme', theme);
    }
}
const toggle = document.getElementById('toggle-input');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

function updateUI(theme) {
    toggle.checked = theme === 'light';

    if (theme === 'light') {
        lightIcon.style.visibility = "hidden";
        darkIcon.style.visibility = "visible";
    } else {
        darkIcon.style.visibility = "hidden";
        lightIcon.style.visibility = "visible";
    }
}

toggle.addEventListener('click', () => {
    const theme = toggle.checked ? 'light' : 'dark';
    setTheme(theme, true);
    updateUI(theme);
});
const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const preferredTheme = localStorage.getItem('preferred-theme') || osPreference;

setTheme(preferredTheme, false);
updateUI(preferredTheme);

