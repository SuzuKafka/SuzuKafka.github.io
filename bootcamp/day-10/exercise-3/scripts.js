document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', function (event) {
    let hasError = false;
    let errorMessage = "";

    // Check for empty fields
    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
      if (!input.value.trim()) {
        hasError = true;
        errorMessage += `${input.previousElementSibling.textContent} cannot be empty.\n`;
      }
    });

    // Validate age
    const age = document.getElementById('age').value;
    if (age < 16 || age > 90) {
      hasError = true;
      errorMessage += "Age must be between 16 and 90.\n";
    }

    // Validate phone number to be a number
    const phone = document.getElementById('phone').value;
    if (isNaN(phone) || phone.trim() === "") {
      hasError = true;
      errorMessage += "Phone number must be a valid number.\n";
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      hasError = true;
      errorMessage += "Email must be in a valid format.\n";
    }

    // If there's an error, prevent form submission and show alert
    if (hasError) {
      alert(errorMessage);
      event.preventDefault();
    }
  }, false);
});
