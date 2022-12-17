function emailValidation(isHtml = true) {
    value = document.getElementById('email_field').value;
    atp = value.includes("@");
    dtp = value.includes(".");
    charlen = value.length;
    if (charlen <= 3 || atp == false || dtp == false) {
        document.getElementById("email-error").innerHTML = "Make sure email is more than 3 characters and has @ and a .";
        document.getElementById("final-check").innerHTML = ""
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        if (isHtml === true) {
            isPasswordValid = passwordValidation(isHtml = false);
            if (isPasswordValid == true) {
                document.getElementById("final-check").innerHTML = "All good to go";
            }
        }
        return true;
    }
}


function passwordValidation(isHtml = true) {
    value = document.getElementById('password_field').value;
    pw = value.length;
    if (pw < 8) {
        document.getElementById("password-error").innerHTML = "Make sure password is more than 8 characters.";
        document.getElementById("final-check").innerHTML = ""
        return false;
    }
    else {
        document.getElementById("password-error").innerHTML = "";
        if (isHtml === true) {
            isEmailValid = emailValidation(isHtml = false);
            if (isEmailValid == true) {
                console.log("inside check")
                document.getElementById("final-check").innerHTML = "All good to go";
            }
        }
        return true;
    }
}

function clicked() {
    if (confirm('Do you want to submit?')) {
        alert("successful signup!");
    } else {
        // return false;
    }
}

