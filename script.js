let UserElement = document.getElementById("btn");

UserElement.addEventListener('click', function (e) {
    e.preventDefault()
    let inputElement = document.getElementById('userName');
    let inputValue = inputElement.value;
    console.log(inputValue);

    // nameVadlidate();
});

let PasswordElement = document.getElementById("btn");

PasswordElement.addEventListener('click', function (e) {
    e.preventDefault()
    let inputElement = document.getElementById('password');
    let inputValue = inputElement.value;
    console.log(inputValue);

    passwordVadlidate();
});

// function nameVadlidate() {
//     const nameinput = document.getElementById('userName');
//     const errorspan = document.getElementById('errorName');

//     const uppercasePattern = /[A-Z]/;

//     if ((!uppercasePattern.test(nameinput.value))) {
//         errorspan.style.display = "inlilne";
//         errorspan.innerHTML = "Use UpperCase letter";
//     } else {
//         errorname.style.display = "none";
//     }

// }

function passwordVadlidate() {

    const passwordinput = document.getElementById("password");
    const errorpass = document.getElementById("errorPassword");

    const length = passwordinput.value.length;
    const uppercasePattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*]/
    const digitPattern = /\d/;
    if (passwordinput.value.trim() == "") {
        errorpass.style.display = "inline";
        errorpass.innerHTML = "Please Enter Password"
    } else if (length < 8) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Enter atleast 8 digit password";
    } else if ((!uppercasePattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use One UpperCase letter";
    } else if ((!specialCharacterPattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use one Special Character";
    } else if ((!digitPattern.test(passwordinput.value))) {
        errorpass.style.display = "inline"
        errorpass.innerHTML = "Use one integer Value";
    } else {
        errorpass.style.display = "none";
    }
};