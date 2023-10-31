// Getting refrences to html input elements and the verification button
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
const verifyButton = document.getElementById('verifyButton');
// Adding a click event listener to the verification button, triggering the verifyPasswords function
verifyButton.addEventListener('click', verifyPasswords);
// Creating a function to verify passwords
function verifyPasswords() {
    // Retrieving the values entered in the password input fields
    const password1 = password1Input.value;
    const password2 = password2Input.value;

    // Checking if the first password is at least eight characters long
    if (password1.length < 8) {
        alert('Password is not at least eight characters long');
        // Checking if the two passwords are different
    } else if (password1 !== password2) {
        alert('Two passwords are different');
        // Else the passwords are a match
    } else {
        alert('Two passwords are matched');
    }
}
