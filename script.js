// ==========================================
// UrbanMix 26116 - Website JavaScript
// ==========================================

// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("UrbanMix 26116 website loaded successfully!");

    // ------------------------------------------
    // Smooth navigation
    // ------------------------------------------

    const navigationLinks = document.querySelectorAll(".links a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // ------------------------------------------
    // Login form
    // ------------------------------------------

    const loginButton = document.getElementById("loginBtn");
    const signupButton = document.getElementById("signupBtn");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("authMessage");


    // ------------------------------------------
    // Sign Up button
    // ------------------------------------------

    if (signupButton) {

        signupButton.addEventListener("click", function () {

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === "" || password === "") {

                message.textContent =
                    "Please enter your email and password.";

                return;
            }

            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                return;
            }

            message.textContent =
                "Account information entered successfully. Supabase authentication will be connected next.";

        });

    }


    // ------------------------------------------
    // Login button
    // ------------------------------------------

    if (loginButton) {

        loginButton.addEventListener("click", function () {

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === "" || password === "") {

                message.textContent =
                    "Please enter your email and password.";

                return;
            }

            message.textContent =
                "Login interface is working. Supabase authentication will be connected next.";

        });

    }


    // ------------------------------------------
    // Enter key support
    // ------------------------------------------

    if (passwordInput) {

        passwordInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                if (loginButton) {
                    loginButton.click();
                }

            }

        });

    }


    // ------------------------------------------
    // Simple welcome message
    // ------------------------------------------

    console.log(
        "Welcome to UrbanMix 26116 - Urban Mixed-Use Design Project"
    );

});
