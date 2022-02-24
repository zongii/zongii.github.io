button = document.getElementById("theme-switcher");
logo = document.getElementById("toplogo");
const rootDataset = document.documentElement.dataset;
var darkTheme = true;


button.addEventListener("click", () => {
    darkTheme = !darkTheme;
    console.log("CLICK");
    switchTheme(darkTheme)
    if (darkTheme) {
        document.documentElement.style.setProperty('--theme-switcher-rotation', '0deg');
        return;
    }
    document.documentElement.style.setProperty('--theme-switcher-rotation', '180deg');

})

function switchTheme(darkMode) {
    rootDataset.theme = darkMode ? '' : 'light';
    logo.src = darkMode ? '../sources/logo.png' : '../sources/logo-white.png';
}