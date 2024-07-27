document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    // Clear any previous error states
    username.classList.remove('input-error');
    password.classList.remove('input-error');
    message.innerHTML = '';

    // Validate input
    if (username.value.trim() === '') {
        username.classList.add('input-error');
        message.innerHTML += 'Username is required\n';
    }
    if (password.value.trim() === '') {
        password.classList.add('input-error');
        message.innerHTML += 'Password is required\n';
    }
});
