let nav = document.querySelector('nav');
// NavScroll......
window.addEventListener('scroll', () => {
        nav.classList.toogle('nav-scroll', window.scrollY > 0)
    })
    // active toogle.....
let AllNavLinkA = document.querySelectorAll('.nav-links li a');
// active add.....
AllNavLinkA.forEach(item => {
        item.addEventListener('click', () => {
            removeActive();
            item.classList.add('acitive');
        })
    })
    // active remove.....
const removeActive = () => AllNavLinkA.forEach(itme => {
        itme.classList.remove('acitive')
    })
    // nav link toogler.....
let menuBars = document.querySelector('nav button');
let navlinks = document.querySelector('.nav-links')
menuBars.addEventListener('click', () => {
    navlinks.classList.toggle('nav-link-block')

});