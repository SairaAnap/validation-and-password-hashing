function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var confirmPassword = document.forms["loginForm"]["confirmPassword"].value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return false;
    }

    errorMessage.textContent = ""; 
    return true;
}
