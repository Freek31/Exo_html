import * as x from "./Meteo.js";
window.onload = init();

function init() {

    eventOnClick();
    eventOnClick2();
}

function eventOnClick() {
    var villes = document.getElementById('ville')
    var villeSelectValue = villes.options[villes.selectedIndex].value;
    const urlVille = "https://localhost/Exo_html/08-Angular/Meteo/meteo.php?ville=";
    var templateVille = `${urlVille}${villeSelectValue}`;
    fonct_fetch(templateVille);
}

function eventOnClick2() {
    var villes = document.getElementById('nom_ville');
    var ville = villes.value;
    console.log(ville);

    const urlVille = "https://www.prevision-meteo.ch/services/json/";

    var templateVille = `${urlVille}${ville}`;

    fonct_fetch(templateVille);
}

function fonct_fetch(templatVille) {
    fetch(templatVille)
        .then(function (response) {
            // Récupérer le corps de la requete en JSON
            return response.json();
        })
        .then(function (data) {
            if (data.errors) {
                console.log(data.errors)
                let html =
                    `
                <h1>Erreur : ${data.errors[0].description}</h1>
        
                `;
                document.getElementById('madiv').innerHTML = html;
            } else {
                console.log('coucou');
                x.Meteo.tab_meteo(data);


            }

            console.log(meteo);
        })

        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}


