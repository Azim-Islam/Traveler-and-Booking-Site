const registerContainer = document.getElementById('registerContainer');
const userContainer = document.getElementById('userContainer');
const userContainer1 = document.getElementById('userContainer1');

const signoutBtn = document.getElementById('signout');
const signoutBtn1 = document.getElementById('signout1');



let isUserLoggedin =  localStorage.getItem('isUserLoggedin');

if (isUserLoggedin === 'true'){
    console.log(isUserLoggedin);
    registerContainer.classList.replace('d-flex', 'd-none')
    userContainer.classList.replace('d-none', 'd-flex');
    userContainer1.classList.replace('d-lg-none', 'd-lg-flex');

    console.log(registerContainer.style.display);
}

else{
    userContainer.classList.replace('d-flex', 'd-none')
    registerContainer.classList.replace('d-none', 'd-flex');
    userContainer1.classList.replace('d-lg-flex', 'd-lg-none');
}


signoutBtn.addEventListener('click', (event) => {
    localStorage.setItem('isUserLoggedin', false);
    location.reload();
});

signoutBtn1.addEventListener('click', (event) => {
    localStorage.setItem('isUserLoggedin', false);
    location.reload();
});


