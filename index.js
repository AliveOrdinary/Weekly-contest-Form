function emailValidation() {
    value = document.getElementById('email_field').value;
    atp = value.includes("@");
    dtp = value.includes(".");
    charlen = value.length;
    if (charlen <= 3 || atp == false || dtp == false) {
        document.getElementById("email-error").innerHTML = "Make sure email is more than 3 characters and has @ and a .";
        return false;
    } else {
        return true;
    }
}

function passwordValidation() {
    value = document.getElementById('password_field').value;
    pw = value.length;
    if (pw < 8) {
        document.getElementById("password-error").innerHTML = "Make sure password is more than 8 characters.";
        return false;
    }
    else {
        return true;
    }
}

