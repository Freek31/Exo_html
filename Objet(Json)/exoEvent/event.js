
function init() {
   // var btn1 = document.getElementById("bouton1");
    //btn1.addEventListener("click", function() {


        var btn2 = document.createElement("button");                     // Créer un élément <button>
        var t = document.createTextNode("Bouton2");                      // Créer un noeud textuel
        btn2.appendChild(t);                                             // Ajouter le texte au bouton
        //var x = document.querySelectorAll("div")[1];
        //console.log(x);
       
        document.body.appendChild("btn2");    // Ajoute la balise <button> à la balise <body>

    } window.onload = init();
