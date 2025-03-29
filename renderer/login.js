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

    document.getElementById('change-password-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Get the password values
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmNewPassword = document.getElementById('confirm-new-password').value;
    
        // Sample function that checks if the old password is correct
        const correctOldPassword = 'yourOldPassword'; // Replace with actual logic for validation
    
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
