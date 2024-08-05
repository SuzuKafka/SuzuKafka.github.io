// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value.trim();
    var email = document.contactForm.email.value.trim();
    var mobile = document.contactForm.mobile.value.trim();
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
    // Clear previous error messages
    var noError = true;
    printError("nameErr", "");
    printError("emailErr", "");
    printError("mobileErr", "");
    printError("countryErr", "");
    printError("genderErr", "");

    // Validate name
    if (name === "") {
        printError("nameErr", "Please enter your full name.");
        noError = false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        printError("emailErr", "Please enter your email address.");
        noError = false;
    } else if (!emailPattern.test(email)) {
        printError("emailErr", "Please enter a valid email address.");
        noError = false;
    }

    // Validate mobile number
    var mobilePattern = /^\d{10}$/;
    if (mobile === "") {
        printError("mobileErr", "Please enter your mobile number.");
        noError = false;
    } else if (!mobilePattern.test(mobile)) {
        printError("mobileErr", "Please enter a valid 10-digit mobile number.");
        noError = false;
    }

    // Validate country selection
    if (country === "Select") {
        printError("countryErr", "Please select your country.");
        noError = false;
    }

    // Validate gender selection
    if (!gender) {
        printError("genderErr", "Please select your gender.");
        noError = false;
    }

    // Return false to prevent form submission if validation fails
    return noError;
}
