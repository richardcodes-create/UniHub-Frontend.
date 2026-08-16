document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (!menuBtn || !navMenu) {
        console.error("UniHub navigation elements not found.");
        return;
    }

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen = navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active", isOpen);

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    const links = navMenu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });

    });


    document.addEventListener("click", function (event) {

        if (!event.target.closest(".navbar")) {

            navMenu.classList.remove("active");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {

            navMenu.classList.remove("active");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});