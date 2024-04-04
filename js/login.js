const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

function validateUsername(username) {
    return username.length >= 6;
}

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
}

function formValidation(event) {
    event.preventDefault();

    const enteredUsername = username.value;
    const enteredPassword = password.value;

    if (!validateUsername(enteredUsername) || !validatePassword(enteredPassword)) {
        alert("Username or password incorrect.");
        return;
    }

    // Assuming login is successful, redirect to index page
    window.location.href = "index.html";
}

form.addEventListener('submit', formValidation);
