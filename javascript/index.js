var navBar = document.querySelector('nav');

var pxNavTop = 0;

window.addEventListener("scroll", function() {
    var navTop = window.pageYOffset || document.documentElement.navTop;
    if (navTop > pxNavTop) {
        navBar.classList.add('hidden');
    } else {
        navBar.classList.remove('hidden');
    }
    pxNavTop = navTop <= 0 ? 0 : navTop;
}, false);

const btnWeb = document.querySelector('.btnWeb');
const reponseWeb = document.querySelector('.reponseNewBtnWeb');
const btnDesign = document.querySelector('.btnDesign');
const reponseDesign = document.querySelector('.reponseNewBtnDesign');
const btnUi = document.querySelector('.btnUi');
const reponseUi = document.querySelector('.reponseNewBtnUi');
const closeWeb = document.querySelector('.closeWeb');
const closeDesign = document.querySelector('.closeDesign');
const closeUi = document.querySelector('.closeUi');

btnWeb.addEventListener('click', function() {
    reponseWeb.classList.add('AvoirPlus1');
});

btnDesign.addEventListener('click', function() {
    reponseDesign.classList.add('AvoirPlus1');
});

btnUi.addEventListener('click', function() {
    reponseUi.classList.add('AvoirPlus1');
});

closeWeb.addEventListener('click', function() {
    reponseWeb.classList.remove('AvoirPlus1');
});

closeDesign.addEventListener('click', function() {
    reponseDesign.classList.remove('AvoirPlus1');
});

closeUi.addEventListener('click', function() {
    reponseUi.classList.remove('AvoirPlus1');
});



document.querySelectorAll('.flex-question').forEach(question => {
    question.addEventListener('click', function() {
        const target = this.parentElement.dataset.target;
        const reponse = document.querySelector(`.reponse${target}`);
        const arrowDown = this.querySelector('.down');
        const arrowUp = this.querySelector('.up');

        reponse.classList.toggle('new');
        if (arrowDown) arrowDown.classList.toggle('arrow');
        if (arrowUp) arrowUp.classList.toggle('arrow'); 
    });
});



const morpionClick = document.querySelector(".morpion")
const meteoClick = document.querySelector(".meteo")

morpionClick.addEventListener('click', function() {
    window.location.href = 'https://reazeer-91.github.io/siteweb/html/morpion.html';
});

meteoClick.addEventListener('click', function() {
    window.location.href = 'https://reazeer-91.github.io/siteweb/html/meteo.html';
});




const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;


switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--text', '#000517');
        document.documentElement.style.setProperty('--background', '#fff');
        document.documentElement.style.setProperty('--paragraphe', '#383838');
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--text', '#fff');
        document.documentElement.style.setProperty('--background', '#000517');
        document.documentElement.style.setProperty('--paragraphe', '#c1c1c1');
        toggleTheme--;

    }

})


