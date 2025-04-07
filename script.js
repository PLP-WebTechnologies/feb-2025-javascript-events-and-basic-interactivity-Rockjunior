document.addEventListener("DOMContentLoaded", () => {
    // Event listener for form submission
    const form = document.getElementById("signUpForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent form submission for validation

        // Form validation
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (username === "") {
            alert("Username cannot be empty.");
            return;
        }

        if (password === "") {
            alert("Password cannot be empty.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Reset form after successful submission
    });

    // Event listener for password visibility toggle
    const togglePasswordButton = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");

    togglePasswordButton.addEventListener("click", function () {
        // Toggle the type of the password fields
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;
        confirmPasswordField.type = type;
    });
});
