function validate() {

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var course = document.getElementById('course');

    // Enter your code here

    let alertMessage = '';
    let hasError = false;

    console.log('First Name:', fname.value.trim());
    if (fname.value.trim() === '') {
        alertMessage += 'First name is required\n';
        hasError = true;
    }

    console.log('Last Name:', lname.value.trim());
    if (lname.value.trim() === '') {
        alertMessage += 'Last name is required\n';
        hasError = true;
    }

    console.log('Address:', address.value.trim());
    if (address.value.trim() === '') {
        alertMessage += 'Address is required\n';
        hasError = true;
    }

    console.log('Gender:', gender);
    if (gender === null) {
        alertMessage += 'Please select gender\n';
        hasError = true;
    }

    console.log('Email:', email.value.trim());
    if (email.value.trim() === '') {
        alertMessage += 'Email is required\n';
        hasError = true;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alertMessage += 'Email is not in proper format\n';
            hasError = true;
        }
    }

    console.log('Mobile:', mobile.value.trim());
    if (mobile.value.trim() === '') {
        alertMessage += 'Phone number is required\n';
        hasError = true;
    } else {
        if (isNaN(mobile.value.trim())) {
            alertMessage += 'Phone number should be a number\n';
            hasError = true;
        }
    }

    console.log('Course:', course.value.trim());
    if (course.value.trim() === 'select course') {
        alertMessage += 'Please select course\n';
        hasError = true;
    }

    if (hasError) {
        alert(alertMessage);
        return false;
    } else {
        return true;
    }
}
