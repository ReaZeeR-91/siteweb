let ville;
let temperature;
let temps;
let tempMax;
let tempMin;
let vent;

const villeHtml = document.querySelector('.ville');
const tempHtml = document.querySelector('.temp');
const tempsHtml = document.querySelector('.temps');
const dateHtml = document.querySelector('.date');
const jourHtml = document.querySelector('.jour');
const ventHtml = document.querySelector('.vent');
const tempMaxHtml = document.querySelector('.temp-max');
const tempMinHtml = document.querySelector('.temp-min');

const soleil = document.querySelector('.soleil');
const nuage = document.querySelector('.nuage');
const neige = document.querySelector('.neige');
const pluie = document.querySelector('.bruine');
const fortePluie = document.querySelector('.fortePluie');
const brume = document.querySelector('.brume');

const dateActuelle = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const option = { weekday: 'long'};
const dateDuJour = dateActuelle.toLocaleDateString('fr-FR', options);
const jour = dateActuelle.toLocaleDateString('fr-FR', option);


function getValue() {
    ville = document.querySelector(".input-search").value;
    main();
}

window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getValue()
    }
});


function main(){ 
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&exclude=&appid=bddb0cd04d55a5dd035c87ef8d4accb6&lang=fr&units=metric')
    .then(resultat => resultat.json())
    .then(json=> {
        console.log(json);
        temperature = json.main.temp;
        temps = json.weather[0].main;
        tempMax = json.main.temp_max;
        tempMin = json.main.temp_min;
        vent = json.wind.speed;
        if (temps === 'Clear') {
            temps = 'Dégagée';
            soleil.style.display = 'block';
            nuage.style.display = 'none';
            neige.style.display = 'none';
            pluie.style.display = 'none';
            fortePluie.style.display = 'none';
            brume.style.display = 'none';
        } else if (temps === 'Rain') {
            temps = 'Pluie';
            soleil.style.display = 'none';
            nuage.style.display = 'none';
            neige.style.display = 'none';
            pluie.style.display = 'block';
            fortePluie.style.display = 'none';
            brume.style.display = 'none';
        } else if (temps === 'Clouds') {
            temps = 'Nuageux';
            soleil.style.display = 'none';
            nuage.style.display = 'block';
            neige.style.display = 'none';
            pluie.style.display = 'none';
            fortePluie.style.display = 'none';
            brume.style.display = 'none';
        } else if (temps === 'Snow') {
            temps = 'Neige';
            soleil.style.display = 'none';
            nuage.style.display = 'none';
            neige.style.display = 'block';
            pluie.style.display = 'none';
            fortePluie.style.display = 'none';
            brume.style.display = 'none';
        } else if (temps === 'mist') {
            temps = 'Brume';
            soleil.style.display = 'none';
            nuage.style.display = 'none';
            neige.style.display = 'none';
            pluie.style.display = 'none';
            fortePluie.style.display = 'none';
            brume.style.display = 'block';
        } else if (temps === 'Drizzle') {
            temps = 'Bruine';
            soleil.style.display = 'none';
            nuage.style.display = 'none';
            neige.style.display = 'none';
            pluie.style.display = 'block';
            fortePluie.style.display = 'none';
            brume.style.display = 'none';
        }
    })

    setTimeout(() => {
        villeHtml.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + ville;
        tempHtml.innerHTML = temperature +' °C';
        tempsHtml.innerHTML = temps;
        tempMaxHtml.innerHTML = tempMax +' °C';
        tempMinHtml.innerHTML = tempMin +' °C';
        ventHtml.innerHTML = vent +' km/h';
    }, 100)
}

dateHtml.innerHTML = dateDuJour;
jourHtml.innerHTML = jour;