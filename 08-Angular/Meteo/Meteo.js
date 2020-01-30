export class Meteo {

    constructor(){

    }
    
     static tab_meteo(data) {
        let html =
        `
                <label for = "nomm_ville">Nom de ville : </label>
                <input type="text" id="nom_ville" name = "nom_ville">
                <button id="meteo_ville" onclick="eventOnClick2()">Valider</button>
        `;

    html += `
        <div>
            </br>
            <h1>${data.city_info.name}</h1>
            <h2>${data.current_condition.date}</h2>
        </div>
        
        <table id='prev_jours'>
            <tr>
                <td>Jour</td>
                <td>Icone</td>
                <td>Cond.</td>
                <td>Tmin</td>
                <td>Tmax</td>
            </tr>
            `;

    for (var i = 0; i < 5; i++) {
        html += `
                    <tr>
                        <td>${data['fcst_day_' + i].day_long}</td>
                        <td><img src="${data['fcst_day_' + i].icon}"></td>
                        <td>${data['fcst_day_' + i].condition_key}</td>
                        <td>${data['fcst_day_' + i].tmin} ${'°C'}</td>
                        <td>${data['fcst_day_' + i].tmax} ${'°C'}</td>
                    </tr>
                `;
    }

    html += `</table>`;

    document.getElementById('madiv').innerHTML = html;
    }



}