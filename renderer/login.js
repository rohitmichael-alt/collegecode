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

    // Google Sign-In Integration
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: "812507302569-c7ihkggoahk80ag5l5ou0vt1p8vlk4q3.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("google-signin-button"),
            { theme: "outline", size: "large" }
        );

        google.accounts.id.prompt(); // Display Google One Tap Sign-in
    };

    function handleCredentialResponse(response) {
        console.log("Google Sign-In Response:", response);
        const idToken = response.credential;

        // Send the token to your backend (or Clerk)
        fetch("https://shining-oryx-76.clerk.accounts.dev/oauth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: idToken })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Login success:", data);
            localStorage.setItem("googleUser", JSON.stringify(data));
            window.location.href = "details.html";
        })
        .catch(error => {
            console.error("Google Sign-In Error:", error);
            errorMessage.textContent = "Google login failed. Try again.";
        });
    }

    // Password Change Functionality (Kept Intact)
    document.getElementById('change-password-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the password values
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmNewPassword = document.getElementById('confirm-new-password').value;

        // Sample function that checks if the old password is correct
        const correctOldPassword = 'yourOldPassword'; // Replace with actual validation logic

        if (oldPassword !== correctOldPassword) {
            document.getElementById('password-error-message').innerText = 'Incorrect old password. Please try again.';
            return;
        }

        if (newPassword !== confirmNewPassword) {
            document.getElementById('password-error-message').innerText = 'New password and confirmation do not match. Please try again.';
            return;
        }

        // If everything is okay, proceed to change the password
        // Make an API call or update the password in your storage logic here.
        document.getElementById('password-error-message').innerText = 'Password changed successfully!';
    });
});
