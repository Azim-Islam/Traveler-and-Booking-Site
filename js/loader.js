
document.onreadystatechange = function () {
    const loadingSection = document.getElementById('loading');

    if (document.readyState !== "complete") {
        console.log('loading has begun');
        loadingSection.classList.replace('d-none', 'd-flex');
        document.body.classList.add('overflow-hidden');
    } else {
        setTimeout(() => {
            loadingSection.classList.replace('d-flex', 'd-none');
            // loadingSection.classList.add('invisible');
            document.body.classList.remove('overflow-hidden');
        }, 500);
    }
 };