var menu = document.getElementById("nav-menu");
var navigation = document.getElementById("navbar-mobile");

toggleNavigation("none")

menu.addEventListener("click", () => {
    if (navigation.style.display == "none") {
        toggleNavigation("flex");
        return;
    }
    toggleNavigation("none");
})

function toggleNavigation(style) {
    navigation.style.display = style;
}