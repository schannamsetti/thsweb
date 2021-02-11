function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");

    var formValid = true;
    if (!isFieldValid(firstName)) {
        formValid = false;
    }

    if (!isFieldValid(lastName)) {
        formValid = false;
    }

    return formValid;
}

function isFieldValid(formElement) {
    if (formElement == null || formElement.value == null || formElement.value.length == 0) {
        return false;
    }
    return true;
}