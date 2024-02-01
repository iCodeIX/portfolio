document.addEventListener("DOMContentLoaded", (event) => {

    const hamburgerIcon = document.querySelector("#hamburgerIcon");
    const navMenu = document.querySelector(".navMenu");

    hamburgerIcon.addEventListener("click", toggleNavMenu);

    function toggleNavMenu() {
        navMenu.classList.toggle("showNavMenu");
    }

});