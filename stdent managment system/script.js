// Select the form, password fields, and error message
const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
    if (password.value !== confirmPassword.value) {
        // Prevent form submission if passwords don't match
        event.preventDefault();
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message if they match
        alert('Form submitted successfully!');
    }
});
