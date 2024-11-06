
const signinBtn = document.querySelector('.s-signin-button');
const signinForm = document.getElementById('signinForm');

console.log(signinBtn);

signinBtn.addEventListener('click', (event) => {
    // event.preventDefault(); 
    if (signinForm.checkValidity()){
        localStorage.setItem('isUserLoggedin', true);
        console.log('setting isUserLoggedin to True');
        signinForm.submit();
    }
});
