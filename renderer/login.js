document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username.length < 6 || username.startsWith(" ")) {
            errorMessage.textContent = "Username must be at least 6 characters and not start with a space.";
            return;
        }

        // Store username in localStorage for later use
        localStorage.setItem("username", username);

        console.log("Login successful!");
        window.location.href = "details.html";
    });
});
