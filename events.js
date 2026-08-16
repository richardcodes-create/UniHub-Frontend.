document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("events-menu");

    const mobileMenu =
        document.getElementById("events-mobile-menu");


    /* Make sure the elements exist */

    if (!menuButton || !mobileMenu) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE MENU
       ===================================================== */

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        const menuIsOpen =
            mobileMenu.classList.contains("active");


        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );


        /* Change hamburger to X */

        if (menuIsOpen) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });



    /* =====================================================
       CLOSE MENU WHEN LINK IS CLICKED
       ===================================================== */

    const menuLinks =
        mobileMenu.querySelectorAll("a");


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });



    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", function (event) {

        const clickedInsideNavbar =
            event.target.closest(".events-navbar");


        if (!clickedInsideNavbar) {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        }

    });



    /* =====================================================
       RESET MENU WHEN SCREEN BECOMES DESKTOP
       ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        }

    });

});