//MAINTAIN STATE

auth.onAuthStateChanged(user => {
    if (user) {
        window.alert('Hi, ' + user.email);
        $('#login').addClass("notDisplaying");
        $('#signUp').addClass("notDisplaying");
        $('#logout').removeClass("notDisplaying");
    } else {
        window.alert('User Logged Out!');
        $('#login').removeClass("notDisplaying");
        $('#signUp').removeClass("notDisplaying");
        $('#logout').addClass("notDisplaying");
    }
});

//SIGN UP

const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signUpForm.reset();
        })
        .catch(err => {
            window.alert("This Email address is already in use by another account!");
        })
})

//LOGOUT

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut();
});

//LOGIN

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred.user);

            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
            // window.alert('Welcome back, ' + cred.user.email);
        })
        .catch(err => {
            window.alert("Invalid Login");
        });
});