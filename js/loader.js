
document.onreadystatechange = function () {
    const loadingSection = document.getElementById('loading');
    const body = document.body;
    if (document.readyState !== "complete") {
        console.log('loading has begun');
        loadingSection.classList.replace('d-none', 'd-flex');
        document.body.classList.add('overflow-hidden');
    } else {
        console.log('loading has ended');
        loadingSection.classList.replace('d-flex', 'd-none');
        document.body.classList.remove('overflow-hidden');
    }
 };