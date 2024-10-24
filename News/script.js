let add1 = document.querySelector('.news-right-add1');

setTimeout(() => {
    add1.style.opacity = 1;
    add1.style.transform = 'translateY(0)'; 
}, 1000);

let add2 = document.querySelector('.news-right-add2');

setTimeout(() => {
    add2.style.opacity = 1;
    add2.style.transform = 'translateY(0)'; 
}, 1500);

const newsRight = document.getElementsByClassName('news-right')[0];
const footer = document.getElementById('footer');


window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY + window.innerHeight;
    
    const footerOffsetTop = footer.offsetTop;z


    if (scrollPosition >= footerOffsetTop) {
        newsRight.style.display = 'none';
    } else {
        newsRight.style.display = 'block'; 
    }
});