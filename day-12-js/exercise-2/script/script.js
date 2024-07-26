// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Enter your code here
    var alertMessage = '';
    var errorFlag = false;

    // Validate name
    console.log('Name:', name.trim());
    if (name.trim() === '') {
        alertMessage += 'Please enter your name\n';
        errorFlag = true;
    }

    // Validate email address
    console.log('Email:', email.trim());
    if (email.trim() === '') {
        alertMessage += 'Email is required\n';
        errorFlag = true;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            alertMessage += 'Email is not in proper format\n';
            errorFlag = true;
        }
    }

    // Validate mobile number
    console.log('Mobile:', mobile.trim());
    if (mobile.trim() === '') {
        alertMessage += 'Phone number is required\n';
        errorFlag = true;
    } else {
        if (isNaN(mobile.trim()) || mobile.trim().length != 10) {
            alertMessage += 'Phone number should be a 10 digit number\n';
            errorFlag = true;
        }
    }

    // Validate country
    console.log('Country:', country);
    if (country === 'Select') {
        alertMessage += 'Please select your country\n';
        errorFlag = true;
    }

    // Validate gender
    console.log (gender);
    if (!(gender === 'male') || )

    // Validate hobbies
    console.log (hobbies);

    // Display error message
    if (errorFlag) {
        alert(alertMessage);
        return false;
    }
};