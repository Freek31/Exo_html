function init() {
  var btn1 = document.getElementById("bouton1"); //btn1 = bouton1
  var btn2 = document.createElement("button"); // Créer un élément <button> = btn2 (mais pas encore inseré)
  var btn_all = document.querySelectorAll("button"); //Selectionner tout les boutons (btn1+btn2 ici)

  btn_all.forEach(function(button) {                           //pour chaqu'un des boutons 1&2 on va verifier s'il y a un evenement           
    btn1.addEventListener("click", function() {
      if (document.querySelectorAll("button").length == "1") {     // condition de creation du bouton 2 , seulement s'il n'existe pas
        var t = document.createTextNode("Bouton2 (v1)");    //crée texte bouton 2
        btn2.appendChild(t); // remplit le bouton avec le texte
        document.getElementById("div1").appendChild(btn2); // insère le bouton 2  dans le 1er bloc
      }
      document.getElementById("div2").innerHTML = "mon bouton fonctionne";
    });
    btn2.addEventListener("click", function() {
      document.getElementById("div2").innerHTML = "mon bouton 2";
    });
  });
}
window.onload = init;
