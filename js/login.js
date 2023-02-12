// Login Section JavaScript Start Here

// Step 1:: add click event handler with the submit Button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2:: get the email address inside the email input field.
    // always remember to use .value to get input value
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    // Step-3:: Get Password
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value

    // DANGER: DO NOT VERIFY Email or Password on the client Side
    // Step-4:: Verify Email & Password & Check user valid user or Not
    if (emailValue == 'mrjansu@gmail.com' && passwordValue == 'JANSU2001') {
        window.location.href = 'account.html';
    }
    else {
        alert('You are Giving Wrong Information')
    }

})

// Login Section JavaScript End Here
