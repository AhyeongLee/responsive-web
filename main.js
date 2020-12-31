const searchBtn = document.querySelector('.fa-search');
const inputSpan = document.querySelector('.nav__input');
const menuBtn = document.querySelector('.nav__menu-s');
const menuShow = document.querySelector('.nav__menu-show');
const crewSection = document.querySelector('.crew');

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
    e.target.previousSibling.previousSibling.style.display = 'block';
});
inputSpan.addEventListener('mouseleave', (e) => {
    e.target.firstChild.nextSibling.style.display = 'none';
});
menuBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        const menuShowClass = menuShow.getAttribute('class');
        if (menuShowClass === 'nav__menu-show') {
            menuShow.removeAttribute('class', 'nav__menu-show');
            menuShow.setAttribute('class', 'nav__menu-show-open');
        } else if (menuShowClass === 'nav__menu-show-open') {
            menuShow.removeAttribute('class', 'nav__menu-show-open');
            menuShow.setAttribute('class', 'nav__menu-show');
        }
    }
});
