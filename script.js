// Desktop
let galery = document.querySelector('.images');
let firstElement = document.querySelector('.first-img');
let secondElement = document.querySelector('.second-img');
let thirdElement = document.querySelector('.third-img');
let fourthElement = document.querySelector('.fourth-img');
let fifthElement = document.querySelector('.fifth-img');
let sixthElement = document.querySelector('.sixth-img');
let imagesFull = [firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement];
let img = document.createElement('img');

for (let i = 0; i < imagesFull.length; i++) {
    imagesFull[i].remove();
}

let dot1Full = document.querySelector('.dot1-full');
let dot2Full = document.querySelector('.dot2-full');
let dot3Full = document.querySelector('.dot3-full');
let currentSlide = 1;

let slider = ["assets/img/carousel3.jpg", "assets/img/carousel1.jpg", "assets/img/carousel2.jpg"];
let step = 0;
let offset2 = 0;
let numberImg = 2;
function draw(left) {
    let picture = document.createElement('img');
    picture.src = slider[step];
    picture.classList.add('picture');
    picture.id = 'picture' + left;
    picture.style.left = left * 60 - 38 + '%';
    galery.append(picture);
    if (step + 1 === slider.length) {
        step = 0;
    } else { step++; }
    offset2++;
    dots(currentSlide);
};

draw(-1);
draw(0);
draw(1);
draw(2);
draw(3);

function draww(left) {
    let picture = document.createElement('img');
    picture.src = slider[step];
    picture.classList.add('picture');
    picture.id = 'picture' + left;
    picture.style.left = left * 60 - 38 + '%';
    galery.prepend(picture);
    if (step === 0) {
        step = 2;
    } else { step--; }
    offset2++;
};

function dots(slide) {
    if (slide === 0) {
        dot1Full.style.background = "#F2785C";
        dot2Full.style.background = "rgba(242, 120, 92, 0.5)";
        dot3Full.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (slide === 1) {
        dot1Full.style.background = "rgba(242, 120, 92, 0.5)";
        dot2Full.style.background = "#F2785C";
        dot3Full.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (slide === 2) {
        dot1Full.style.background = "rgba(242, 120, 92, 0.5)";
        dot2Full.style.background = "rgba(242, 120, 92, 0.5)";
        dot3Full.style.background = "#F2785C";
    }
};

function next() {
    nextImg.onclick = null;
    let slides2 = document.querySelectorAll('.picture');
    for (let i = 0; i < slides2.length; i++) {
        let left = (slides2[i].style.left).slice(0, -1);
        slides2[i].style.left = Number(left) - 60 + '%';
    };
    if (currentSlide === 2) currentSlide = 0; else currentSlide = currentSlide + 1;
    dots(currentSlide);
    setTimeout(() => {
        nextImg.onclick = next;
        slides2[0].remove();
        draw(3);
    }, 500);
};

function prev() {
    prevImg.onclick = null;
    let slides2 = document.querySelectorAll('.picture');
    for (let i = 0; i < slides2.length; i++) {
        let left = (slides2[i].style.left).slice(0, -1);
        slides2[i].style.left = Number(left) + 60 + '%';
    };

    if (currentSlide === 0) currentSlide = 2; else currentSlide = currentSlide - 1;
    dots(currentSlide);
    setTimeout(() => {
        prevImg.onclick = prev;
        draww(-1);
        slides2[4].remove();
    }, 500);
};

let prevImg = document.querySelector('.prevBtn');
let nextImg = document.querySelector('.nextBtn');


prevImg.onclick = prev;
nextImg.onclick = next;
/* prevImg.addEventListener('click', () => {
  prev();
});

nextImg.addEventListener('click', () => {
  next();
}); */

document.querySelector('.more').addEventListener('click', () => {
    console.log(currentSlide);
});

// Mobile
let images = document.querySelector('.images-mobile');

let right = document.querySelector('.right');
let left = document.querySelector('.left');

let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');

let offset = 0;

right.addEventListener('click', () => {
    if (offset === -200) offset = -100;
    offset = offset - 100;
    images.style.left = offset + '%';
    right.style.opacity = '1';
    left.style.opacity = '1';
    if (offset === 0) {
        dot1.style.background = "#F2785C";
        dot2.style.background = "rgba(242, 120, 92, 0.5)";
        dot3.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (offset === -100) {
        dot1.style.background = "rgba(242, 120, 92, 0.5)";
        dot2.style.background = "#F2785C";
        dot3.style.background = "rgba(242, 120, 92, 0.5)";
    } else {
        dot1.style.background = "rgba(242, 120, 92, 0.5)";
        dot2.style.background = "rgba(242, 120, 92, 0.5)";
        dot3.style.background = "#F2785C";
        right.style.opacity = '0.2';
    }
});

left.addEventListener('click', () => {
    if (offset === 0) offset = -100;
    offset = offset + 100;
    images.style.left = offset + '%';
    left.style.opacity = '1';
    right.style.opacity = '1';
    if (offset === 0) {
        left.style.opacity = '0.2';
        dot1.style.background = "#F2785C";
        dot2.style.background = "rgba(242, 120, 92, 0.5)";
        dot3.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (offset === -100) {
        dot1.style.background = "rgba(242, 120, 92, 0.5)";
        dot2.style.background = "#F2785C";
        dot3.style.background = "rgba(242, 120, 92, 0.5)";
    } else {
        dot1.style.background = "rgba(242, 120, 92, 0.5)";
        dot2.style.background = "rgba(242, 120, 92, 0.5)";
        dot3.style.background = "#F2785C";
    }
});

let link = document.querySelectorAll('.nav-link');
let overlay = document.querySelector('.overlay');
let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav-menu');
burger.addEventListener('click', () => {
    navMenu.style.display = "block";
    navMenu.style.top = '-15px';
    navMenu.style.left = 100 + 'vw';
    navMenu.style.height = '';
    navMenu.style.margin = ''
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 500);
});

function closeMenu() {
    navMenu.style.left = 150 + 'vw';
    overlay.style.opacity = '0';
    popUp.classList.remove('pop-up-active');
    setTimeout(() => {
        overlay.style.display = '';
    }, 500);
    headingPopup.innerHTML = 'Create account';
    popUpBtn.innerHTML = 'Sign Up';
    registerAsk.innerHTML = 'Already have an account?';
    register.innerHTML = 'Log in';
    orSeparator.classList.remove('or-hide');
    forgotPassword.classList.remove('forgot-pass-hide');
    popUp.classList.remove('pop-up-sign-up');
};

let links = document.querySelectorAll('.nav-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeMenu);
};

let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

const popUp = document.querySelector('.pop-up');
const loginBtn = document.querySelector('.login');
const accountBnt = document.querySelector('.account');
const register = document.querySelector('.register');
const headingPopup = document.querySelector('.heading-popup');
let singInBtn = document.querySelectorAll('.sing-in');
const orSeparator = document.querySelector('.or');
const forgotPassword = document.querySelector('.forgot-pass');
const popUpBtn = document.querySelector('.sing-in-btn');
const registerAsk = document.querySelector('.register-ask');
const account = document.querySelector('.account');

function showOverlay() {
    overlay.style.opacity = '1';
}
function showPopUp() {
    popUp.classList.add('pop-up-active');
    setTimeout(() => {
        overlay.style.display = 'block';
    }, 600);
    /* overlay.style.display = 'block'; */
    headingPopup.innerHTML = 'Log in to your account';
    popUpBtn.innerHTML = 'Sign In';
    registerAsk.innerHTML = 'Don’t have an account?';
    register.innerHTML = 'Register';
    headingPopup.innerHTML = 'Log in to your account';
    singInBtn.forEach(element => {
        element.classList.remove('sing-in-hide');
    });


    setTimeout(showOverlay, 700);
}

function hideSingInBtn() {
    singInBtn.forEach(element => {
        element.classList.toggle('sing-in-hide');
    });
    orSeparator.classList.toggle('or-hide');
    forgotPassword.classList.toggle('forgot-pass-hide');
    popUp.classList.toggle('pop-up-sign-up');
};

function registerAccount() {
    if (headingPopup.innerHTML === 'Log in to your account') {
        headingPopup.innerHTML = 'Create account';
        popUpBtn.innerHTML = 'Sign Up';
        registerAsk.innerHTML = 'Already have an account?';
        register.innerHTML = 'Log in';
    } else if (headingPopup.innerHTML === 'Create account') {
        headingPopup.innerHTML = 'Log in to your account';
        popUpBtn.innerHTML = 'Sign In';
        registerAsk.innerHTML = 'Don’t have an account?';
        register.innerHTML = 'Register';
    }

    hideSingInBtn();
};

loginBtn.addEventListener('click', showPopUp);
account.addEventListener('click', showPopUp);

register.addEventListener('click', registerAccount);

popUpBtn.addEventListener('click', () => {
    const inputValueEmail = document.getElementById('email').value;
    const inputValuePassword = document.getElementById('password').value;
    alert('Your E-mail is ' + inputValueEmail + ', your password is ' + inputValuePassword);
})

function nbDig(n, d) {
    let squareOfn = [];
    for (let i = 0; i <= n; i++) {
        squareOfn.push(i * i);
    }
};


