// Elements
let selectLoginBtn = document.querySelector('#login-checked');
let selectRegisterBtn = document.querySelector('#register-checked');

let registerForm = document.querySelector('#register-form');
let loginForm = document.querySelector('#login-form');

// button from register form
let registerBtn = document.querySelector('#register-btn');
// inputs register form
let nameInput = document.querySelector('#name');
let registerEmailInput = document.querySelector('#register-email');
let registerPasswordInput = document.querySelector('#register-password');

// button from login form
let loginBtn = document.querySelector('#login-btn');
// inputs login form
let inputEmail = document.querySelector('#login-email');
let inputPass = document.querySelector('#login-password');

// result
let resultAgree = document.querySelector('#alert-logged-in');
let resultDanger = document.querySelector('#alert-rejected');

// Database
// globalno pod default stavame login da bide selektirano da bide true.
let isLoginSelected = true;
// da gi zacuvame lokalno userite.
let registeredUsers = [];





// Function
function showForm() {
    if (isLoginSelected) {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    } else {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
}

showForm();

function hideAlerts() {
    resultAgree.style.display = 'none';
    resultDanger.style.display = 'none';
}
hideAlerts();

function AuthData(email, password, name = '') {
    this.email = email;
    this.password = password;
    this.name = name;
}

function isRegistered(loginUser) {
    for (const user of registeredUsers) {
        if (loginUser.email.toLowerCase() === user.email.toLowerCase() && loginUser.password === user.password) {
            return true;
        }
    }
    return false;
}

// dodatno sa passcheck ama opcionalno e sekoj moze da vnese pass kako saka.
passCheck = loginUser => {
    for (const user of registeredUsers) {
        if (loginUser.password === user.password) {
            return false;
        }
    }
    return true;
}


// Events
selectLoginBtn.addEventListener('click', function () {
    hideAlerts();
    isLoginSelected = true;
    showForm();
})

selectRegisterBtn.addEventListener('click', function () {
    hideAlerts();
    isLoginSelected = false;
    showForm();
})


// za registracija formata button so objekt za userot
registerBtn.addEventListener('click', function () {
    hideAlerts();
    let name = nameInput.value;
    let email = registerEmailInput.value;
    let password = registerPasswordInput.value;

    let newUser = new AuthData(email, password, name);
    if (name === '' || email === '' && password === '') {
        resultDanger.style.display = 'block';
        resultDanger.innerHTML = `<h4 align = 'center'>Please enter your inputs.</h4>`
    } else if (!isRegistered(newUser)) {
        registeredUsers.push(newUser);
        resultAgree.style.display = 'block';
        resultAgree.innerHTML = `<h4 align = 'center'>Hi ${newUser.name}.You are registered successfuly!</h4>`;
    } else if (isRegistered(newUser)) {
        resultDanger.style.display = 'block';
        resultDanger.innerHTML = `<h4 align = 'center'>You are already registered!</h4>`;
    } else {
        resultDanger.style.display = 'block';
        resultDanger.innerHTML = `<h4 align = 'center'>You are not registered!</h4>`;
    }
    nameInput.value = '';
    registerEmailInput.value = '';
    registerPasswordInput.value = '';

})

// za login formata 
loginBtn.addEventListener('click', function () {
    hideAlerts();
    let email = inputEmail.value;
    let password = inputPass.value;

    let loginUser = new AuthData(email, password);

    if (email === '' || password === '') {
        resultDanger.style.display = 'block';
        resultDanger.innerHTML = `<h4 align = 'center'>Please enter your email and password.</h4>`;
    } else if (isRegistered(loginUser)) {
        resultAgree.style.display = 'block';
        resultAgree.innerHTML = `<h4 align = 'center'>You have successfuly logged in.</h4>`;
    } else {
        resultDanger.style.display = 'block';
        resultDanger.innerHTML = `<h4 align = 'center'>You have failed to logg in. Please register</h4>`;
        isLoginSelected = false;
        showForm();
    }
})