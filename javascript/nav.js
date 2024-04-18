const navBarOpen = document.querySelector('.open-menu')
const navBar = document.querySelector('.navbar')

navBarOpen.addEventListener('click', function() {
    navBar.classList.toggle('navbarAjout')
})