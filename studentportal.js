/* =========================================================
   UNIHUB STUDENT PORTAL JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const portalMenu = document.querySelector(".portal-menu");
    const mobileMenu = document.querySelector(".portal-mobile-menu");

    if (portalMenu && mobileMenu) {

        portalMenu.addEventListener("click", function () {

            const isOpen =
                mobileMenu.classList.toggle("mobile-open");

            portalMenu.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            portalMenu.textContent =
                isOpen ? "✕" : "☰";

        });


        /* Close menu when a link is clicked */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("mobile-open");

                portalMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                portalMenu.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            const clickedInsideNavbar =
                portalMenu.contains(event.target);

            const clickedInsideMenu =
                mobileMenu.contains(event.target);

            if (
                !clickedInsideNavbar &&
                !clickedInsideMenu
            ) {

                mobileMenu.classList.remove(
                    "mobile-open"
                );

                portalMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                portalMenu.textContent = "☰";

            }

        });

    }


    /* =====================================================
       PASSWORD SHOW / HIDE
       ===================================================== */

    const passwordInput =
        document.querySelector("#student-password");

    const passwordToggle =
        document.querySelector("#passwordToggle");

    if (passwordInput && passwordToggle) {

        passwordToggle.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type === "password"
                ) {

                    passwordInput.type = "text";

                    passwordToggle.textContent = "🙈";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type = "password";

                    passwordToggle.textContent = "👁";

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    }


    /* =====================================================
       LOGIN FORM
       ===================================================== */

    const loginForm =
        document.querySelector("#portalLoginForm");

    const loginMessage =
        document.querySelector("#loginMessage");

    if (loginForm && loginMessage) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const studentId =
                    document.querySelector(
                        "#student-id"
                    ).value.trim();

                const password =
                    document.querySelector(
                        "#student-password"
                    ).value.trim();


                /* Clear previous message */

                loginMessage.textContent = "";

                loginMessage.className =
                    "login-message";


                /* Basic validation */

                if (studentId === "") {

                    loginMessage.textContent =
                        "Please enter your Student ID.";

                    loginMessage.classList.add(
                        "error"
                    );

                    return;

                }


                if (password === "") {

                    loginMessage.textContent =
                        "Please enter your password.";

                    loginMessage.classList.add(
                        "error"
                    );

                    return;

                }


                /*
                 * DEMO LOGIN
                 *
                 * This does NOT connect to a real database.
                 * It simply demonstrates the interface.
                 */

                loginMessage.textContent =
                    "Login system is ready. Connect this form to your backend.";

                loginMessage.classList.add(
                    "success"
                );

            }
        );

    }


    /* =====================================================
       REMEMBER ME
       ===================================================== */

    const rememberStudent =
        document.querySelector("#rememberStudent");

    const studentIdInput =
        document.querySelector("#student-id");

    if (
        rememberStudent &&
        studentIdInput
    ) {

        const savedStudentId =
            localStorage.getItem(
                "unihub_student_id"
            );

        if (savedStudentId) {

            studentIdInput.value =
                savedStudentId;

            rememberStudent.checked =
                true;

        }


        rememberStudent.addEventListener(
            "change",
            function () {

                if (rememberStudent.checked) {

                    if (
                        studentIdInput.value.trim() !== ""
                    ) {

                        localStorage.setItem(
                            "unihub_student_id",
                            studentIdInput.value.trim()
                        );

                    }

                } else {

                    localStorage.removeItem(
                        "unihub_student_id"
                    );

                }

            }
        );


        studentIdInput.addEventListener(
            "input",
            function () {

                if (rememberStudent.checked) {

                    localStorage.setItem(
                        "unihub_student_id",
                        studentIdInput.value.trim()
                    );

                }

            }
        );

    }


    /* =====================================================
       FEATURE CARD DEMO
       ===================================================== */

    const featureCards =
        document.querySelectorAll(
            ".portal-feature-card"
        );

    featureCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function (event) {

                const href =
                    card.getAttribute("href");

                /*
                 * Only show demo message for "#"
                 * links. Real pages can be added later.
                 */

                if (href === "#") {

                    event.preventDefault();

                    alert(
                        "This Student Portal service will be available after the portal backend is connected."
                    );

                }

            }
        );

    });

});