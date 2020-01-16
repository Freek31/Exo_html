var Telecommande = {

    //ATTRIBUTS


    Color: "black",



    ////SETTERS
    setColor: function (c) {
        this.Color = c;
    },

    Compteur: function (c) {
       var 
    },

    // //GETTERS
    getColor: function () {
        return this.Color;
    },
    // //METHODES
//document.querySelectorAll("section table#tableau tr td[style='color: black;']").length

    addId: function () {

        var arrTD = document.querySelectorAll("section td");
        var self = this;

        arrTD.forEach(function (elTD) {

            elTD.innerHTML = elTD.id;
            elTD.style.color = self.getColor();
           
        });

    },

    countFullCase: function () {
        var arrTR = document.querySelectorAll("section table#tableau tr");
        var res = 0;

        for (ligne = arrTR.length - 1; ligne >= 0; ligne--) {

            for (colonne = 0; colonne < arrTR[0].cells.length; colonne++) {

                if (arrTR[ligne].cells[colonne].innerHTML != "") {

                    res++;
                }
            }

        }
        return res;
    },

    delAleatoire: function () {
        var arrTD = document.querySelectorAll("section td");
        var cpt = 0;
        var case_full = this.countFullCase();
        var self = this;

        arrTD.forEach(function (elTD) {

            var aleatoire = (Math.floor(Math.random() * Math.floor(2)));
            if (aleatoire == "1" && cpt < case_full / 2) {
                elTD.innerHTML = elTD.id;
                elTD.style.color = self.getColor();
                cpt++;
            }
            else {
                elTD.innerHTML = "";
            }
        });


    },

    firstCase: function () {
        var arrTR = document.querySelectorAll("section table#tableau tr");


        var verif = false;

        for (ligne = arrTR.length - 1; ligne >= 0; ligne--) {

            for (colonne = 0; colonne < arrTR[0].cells.length; colonne++) {

                if (arrTR[ligne].cells[colonne].innerHTML == "") {
                    arrTR[ligne].cells[colonne].innerHTML = arrTR[ligne].cells[colonne].id;
                    (arrTR[ligne].cells[colonne]).style.color = this.getColor();
                    verif = true;
                    console.log(ligne, colonne);
                    break;
                }
            }
            if (verif) break;
        }

    },

    addIdDansVide: function () {
        var arrTR = document.querySelectorAll("section table#tableau tr");

        var verif = false;

        for (ligne = arrTR.length - 1; ligne >= 0; ligne--) {

            for (colonne = 0; colonne < arrTR[0].cells.length; colonne++) {

                if (arrTR[ligne].cells[colonne].innerHTML == "") {
                    arrTR[ligne].cells[colonne].innerHTML = arrTR[ligne].cells[colonne].id;
                    (arrTR[ligne].cells[colonne]).style.color = this.getColor();
                }
            }

        }

    }





}





Telecommande.addId();
Telecommande.delAleatoire();
Telecommande.countFullCase();
Telecommande.firstCase();
Telecommande.addIdDansVide();