// header sticky class adds after scroll 
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});




// if menu is open and click is outside navbar-collapse & toggler
const navbarCollapse = document.querySelector('.navbar-collapse');
const toggler = document.querySelector('.navbar-toggler');
let autoCloseTimer;

function startAutoCloseTimer() {
    clearTimeout(autoCloseTimer);


    autoCloseTimer = setTimeout(() => {
        if (navbarCollapse.classList.contains('show')) {
            toggler.click();
        }
    }, 3000);
}

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const isClickInside = navbarCollapse.contains(event.target);

    if (navbarCollapse.classList.contains('show') && !isClickInside && !toggler.contains(event.target)) {
        toggler.click();
        clearTimeout(autoCloseTimer);
    }
});

// Reset timer when menu is opened
toggler.addEventListener('click', function () {
    if (!navbarCollapse.classList.contains('show')) {
        // Menu is opening, start auto-close timer
        startAutoCloseTimer();
    } else {
        // Menu is closing, clear timer
        clearTimeout(autoCloseTimer);
    }
});

// Reset timer on scroll or interaction inside menu
navbarCollapse.addEventListener('mousemove', startAutoCloseTimer);
navbarCollapse.addEventListener('scroll', startAutoCloseTimer);

// document.addEventListener('click', function (event) {
//     const navbarCollapse = document.querySelector('.navbar-collapse');
//     const isClickInside = navbarCollapse.contains(event.target);
//     const toggler = document.querySelector('.navbar-toggler');


//     if (navbarCollapse.classList.contains('show') && !isClickInside && !toggler.contains(event.target)) {
//         toggler.click(); // programmatically close menu
//     }
// });


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




// in nav-header container class add in 992 respjonsive

const contDiv = document.querySelector('.contdiv');

function toggleContainerClass() {
    if (window.innerWidth <= 992) {
        contDiv.classList.add('container-fluid');
    } else {
        contDiv.classList.remove('container-fluid');
    }
}

toggleContainerClass();


window.addEventListener('resize', toggleContainerClass);
const contDiv2 = document.querySelector('.navbar-nav');

function toggleContainerClass2() {
    if (window.innerWidth <= 992) {
        contDiv2.classList.add('container');
    } else {
        contDiv2.classList.remove('container');
    }
}
toggleContainerClass2();

window.addEventListener('resize', toggleContainerClass);
const contDiv3 = document.querySelector('.button-hidden');

function toggleContainerClass3() {
    if (window.innerWidth <= 992) {
        contDiv3.classList.add('container');
    } else {
        contDiv3.classList.remove('container');
    }
}

toggleContainerClass3();

window.addEventListener('resize', toggleContainerClass3);


// working form 
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");
    const phoneInput = document.getElementById("phone");
    const result = document.getElementById("result");

    // Digits only
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        result.innerText = "";
        result.style.color = "";

        const phone = phoneInput.value.trim();

        if (!/^\d{10}$/.test(phone)) {
            result.style.color = "red";
            result.innerText = "Please enter a valid 10-digit phone number.";
            return;
        }

        const formData = new FormData(form);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    result.style.color = "green";
                    result.innerText = "Form submitted successfully !";
                    form.reset();
                } else {
                    result.style.color = "red";
                    result.innerText = "Submission failed. Please try again.";
                }
            })
            .catch(() => {
                result.style.color = "red";
                result.innerText = "Network error. Please try later.";
            });
    });

});


// scropp top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// counter 

const counters = document.querySelectorAll('.counter-num');
let counterStarted = false;

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 60;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
            counterStarted = true;
            startCounters();
        }
    });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));




