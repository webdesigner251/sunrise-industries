
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // adjust 100 to your desired scroll point
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isClickInside = navbarCollapse.contains(event.target);
    const toggler = document.querySelector('.navbar-toggler');

    // if menu is open and click is outside navbar-collapse & toggler
    if (navbarCollapse.classList.contains('show') && !isClickInside && !toggler.contains(event.target)) {
        toggler.click(); // programmatically close menu
    }
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const dropdownBtn = document.querySelector('.dropdown-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

dropdownLinks.forEach(link => {
    if (link.href === window.location.href) {
        dropdownBtn.classList.add('active');
    }
});
const dropdownBtns = document.querySelector('.dropdown-toggle');
if (window.location.href.includes('products')) {
    dropdownBtns.classList.add('active');
} else {
    dropdownBtns.classList.remove('active');
}







const contDiv = document.querySelector('.contdiv');

function toggleContainerClass() {
    if (window.innerWidth <= 992) {
        contDiv.classList.add('container-fluid'); // add container for ≥992px
    } else {
        contDiv.classList.remove('container-fluid'); // remove container for <992px
    }
}

toggleContainerClass();

window.addEventListener('resize', toggleContainerClass);
const contDiv2 = document.querySelector('.navbar-nav');

function toggleContainerClass2() {
    if (window.innerWidth <= 992) {
        contDiv2.classList.add('container'); // add container for ≥992px
    } else {
        contDiv2.classList.remove('container'); // remove container for <992px
    }
}


toggleContainerClass2();

window.addEventListener('resize', toggleContainerClass);
const contDiv3 = document.querySelector('.button-hidden');

function toggleContainerClass3() {
    if (window.innerWidth <= 992) {
        contDiv3.classList.add('container'); // add container for ≥992px
    } else {
        contDiv3.classList.remove('container'); // remove container for <992px
    }
}

toggleContainerClass3();

window.addEventListener('resize', toggleContainerClass3);

