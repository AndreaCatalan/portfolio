//*************** SHOW SCROLL UP ****************// 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

//*************** SCROLL REVEAL ANIMATION ****************// 
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.about')
sr.reveal('.me', {delay: 500})
sr.reveal('.skills', {delay: 600})
sr.reveal('.experience', {delay: 800})
sr.reveal('.projects, .interests', {delay: 1000})
sr.reveal('.interests_img' , {origin: 'left'})
sr.reveal('.interests-descriptions', {origin: 'right'})
sr.reveal('.contact, .footer', {interval: 100})