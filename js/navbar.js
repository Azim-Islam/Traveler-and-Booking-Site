const registerContainer = document.getElementById('registerContainer');
const userContainer = document.getElementById('userContainer');
const signoutBtn = document.getElementById('signout');


let isUserLoggedin =  localStorage.getItem('isUserLoggedin');

if (isUserLoggedin === 'true'){
    console.log(isUserLoggedin);
    registerContainer.classList.replace('d-flex', 'd-none')
    userContainer.classList.replace('d-none', 'd-flex');
    console.log(registerContainer.style.display);
}

else{
    userContainer.classList.replace('d-flex', 'd-none')
    registerContainer.classList.replace('d-none', 'd-flex');
}


signoutBtn.addEventListener('click', (event) => {
    localStorage.setItem('isUserLoggedin', false);
    location.reload();
});

