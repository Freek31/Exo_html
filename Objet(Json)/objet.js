var contact = {
    /* Propriétés */
    nom: "",
    prenom: "",
    telephone: "",
    email: "",


    /* SETTERS */
    setNom: function (v) {

        this.nom = v;
    },

    setPrenom: function (v) {

        this.prenom = v;
    },
    setTel: function (v) {

        this.telephone = v;
    },
    setMail: function (v) {

        this.email = v;
    },


    /* GETTERS */
    getNom: function () {
        return this.nom;
    },
    getPrenom: function () {
        return this.prenom;
    },

    getTel: function () {
        return this.telephone;
    },

    getMail: function () {
        return this.email;
    },


    /* Méthodes */
    toString: function () {
        return this.nom + " " + this.prenom;
    }

};



function init() {
    var x = document.getElementById("valider");
    x.addEventListener("click", function () {

        var n = document.getElementById("nom");
        var p = document.getElementById("prenom");
        var t = document.getElementById("tel");
        var e = document.getElementById("email");

        var newContact = Object.create(contact);

        newContact.setNom(n.value);
        newContact.setPrenom(p.value);
        newContact.setTel(t.value);
        newContact.setMail(e.value);


        console.log(newContact);


        if (!isAlpha(newContact.nom.trim())) {
            n.style.backgroundColor = "red";
   
        }

        if (!isAlpha(newContact.prenom.trim())) {
            p.style.backgroundColor = "red";
   
        }
        if (!isNumerique(newContact.telephone.trim())) {
            t.style.backgroundColor = "red";
        
        }

        if (!isEmail(newContact.email.trim())) {
            e.style.backgroundColor = "red";
        
        }
        
        if ((isAlpha(newContact.nom)) && (isAlpha(newContact.prenom)) && (isNumerique(newContact.telephone)) && (isEmail(newContact.email))) {
            
            var htmlString = "";
            var dataContact = JSON.stringify(newContact);
            var dataGoodContact = JSON.parse(dataContact);
            for (var key in  dataGoodContact) {
                htmlString += "<span>" + key + " : " +  dataGoodContact[key] + "</span>";
                htmlString += "<ul>";
                 htmlString += "</ul>";
            
            }
            
            document.getElementById("asid").innerHTML = htmlString;
        }
    });

    

} window.onload = init;

