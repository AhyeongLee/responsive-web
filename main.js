const searchBtn = document.querySelector('.search-btn');
const inputSpan = document.querySelector('.nav__input');
const menuBtn = document.querySelector('.menu-btn');
const menuShow = document.querySelector('.nav__menu.show');

const crewSection = document.querySelector('.crew');

const menuItems = document.querySelector('.nav__menu ul');
const menuItemsShow = document.querySelector('.nav__menu.show ul');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const crew = document.querySelector('.crew');
const testimonials = document.querySelector('.testimonials');
const testimonialsTitle = document.querySelector('.testimonials .section__main-info');
const testimonialsPicLefts = document.querySelectorAll('.animation-slide-left');
const testimonialsPicRights = document.querySelectorAll('.animation-slide-right');

const onMenu = (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
        switch(target.textContent) {
            case 'About':
                about.scrollIntoView({behavior: 'smooth'});
                break;
            case 'Portfolio':
                portfolio.scrollIntoView({behavior: 'smooth'});
                break;
            case 'Crew':
                crew.scrollIntoView({behavior: 'smooth'});
                break;
            case 'Testimonials':
                testimonials.scrollIntoView({behavior: 'smooth'});
                break;
        }

    }
}

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}
window.addEventListener('scroll', (e) => {
    if (isInViewport(testimonialsTitle)) {
        // testimonialsPic.setAttribute('class', 'animation-slide-right');
        testimonialsPicLefts.forEach(element => {
            element.style.animationPlayState = 'running';
        });
        testimonialsPicRights.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});

menuItemsShow.addEventListener('click', (e) => {
    onMenu(e);
    // menuShow.removeAttribute('class', 'open');
    menuShow.classList.toggle('open');
})
menuItems.addEventListener('click', (e) => {
    onMenu(e);
});

crewSection.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.previousSibling.previousSibling.style.visibility = 'visible';
    }
});
crewSection.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.previousSibling.previousSibling.style.visibility = 'hidden';
    }
});

searchBtn.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.previousSibling.previousSibling.style.visibility = 'visible';
    }
});
searchBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        e.target.parentNode.previousSibling.previousSibling.style.visibility = 'visible';
    }
});
inputSpan.addEventListener('mouseleave', (e) => {
    e.target.firstChild.nextSibling.style.visibility = 'hidden';
});
menuBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        menuShow.classList.toggle('open');
        // if (menuShow.classList.contains('open')) {
        //     menuShow.classList.remove('open');
        // } else {
        //     console.log('else');
        //     menuShow.classList.add('open');
        // }
    }
});
