// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // get data
        db.collection('cafes').get().then(snapshot => {
            setupGuides(snapshot.docs);
        });
        console.log('user '+user.email+'is loged in');
    } else {
        setupGuides
        console.log('user is not logged in');
    }
})


// signup 
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();


// getters
const email = signupForm['signup-email'].value;
const password = signupForm['signup-password'].value;

// signup
firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user logged out');
        location.reload();
    });
});


// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
})
