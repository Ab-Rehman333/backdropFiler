
let password = document.getElementById("password");
let getIcon = document.querySelector(".icon");
let getbutton = document.querySelector("#btn")

password.addEventListener("input", (e) => {
    let input = e.target.value;
    let lenght = input.length;
    switch (true) {
        case lenght <= 5:
            password.style.color = "red";
            break;
        case lenght > 5 && lenght <= 10:
            password.style.color = "orange";
            break;
        case lenght > 10 && lenght <= 15:
            password.style.color = "green";
            break;
        default:
            password.style.color = "black";
            break;
    }
    let blurFilter = 20 - lenght * 4;
    document.body.style.backdropFilter = `blur(${blurFilter}px)`;
});
// for icon
getIcon.addEventListener("click", (e) => {
    if (password.type === "password") {
        getIcon.classList.add("fa-eye-slash");
        getIcon.classList.remove("fa-eye");
        password.type = "text";
    } else {
        getIcon.classList.remove("fa-eye-slash");
        getIcon.classList.add("fa-eye");
        password.type = "password";
    }
});

// // password validation 

function myFunctionpass() {
    let passerror = document.getElementById("error-pass");
    if (password.value === "") {
        passerror.textContent = "ops Please enter password"
        passerror.style.color = "red"
        getbutton.disabled = true

    } else if (password.value.length <= 5) {
        passerror.textContent = "password must required 8 char"
        passerror.style.color = "orange"
        getbutton.disabled = true

    } else {
        passerror.textContent = "";
        getbutton.disabled = false
    }


}

// //  username validaiton 
function myFunction() {
    let username = document.getElementById("username").value;
    let usererror = document.getElementById("error-user");
    if (username === "") {
        usererror.textContent = "ops Please addd some text"
        usererror.style.color = "red"
        getbutton.disabled = true

    } else if (username.length <= 5) {
        usererror.textContent = "username must required 8 char"
        usererror.style.color = "orange"
        getbutton.disabled = true

    } else {
        usererror.textContent = "";
        getbutton.disabled = false


    }

}