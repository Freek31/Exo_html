
function isAlpha(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[a-zA-Z\-]*$/;
        ok = regex.test(val);

    }
    console.log(ok);
    debugger;
    return ok;

}

function isNumerique(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[0-9\.]*$/;
        ok = regex.test(val);
    }
    console.log(ok);
    debugger;
    return ok;
}

function isEmail(val) {
    var ok = false;
    if (val != '') {
        var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
        ok = regex.test(val);
    }
    console.log(ok);
    debugger;
    return ok;
}


function verifForm(f) {

    var nomOk = isAlpha(f.nom);
    var prenomOk = isAlpha(f.prenom);
    var telOk = isNumerique(f.tel);
    var mailOk = isEmail(f.email);


    if (nomOk && prenomOk && telOk && mailOk) {
        return true;
    } else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }

}




function init() {
    var x = document.getElementById("valider");
    x.addEventListener("click", function () {
        var n = document.getElementById("nom");
        if (!isAlpha(n.value)) {
            n.style.backgroundColor = "red";
        
        }
        var p = document.getElementById("prenom");
        if (!isAlpha(p.value)) {
            p.style.backgroundColor = "red";
        }
        var t = document.getElementById("tel");
        if (!isNumerique(t.value)) {
            t.style.backgroundColor = "red";
        }
        var e = document.getElementById("email");
        if (!isEmail(e.value)) {
            e.style.backgroundColor = "red";
        }
        if(isAlpha(n.value) && isAlpha(p.value) && isNumerique(t.value) && isEmail(e.value)){

            document.getElementById("asid").appendChild(document.createTextNode(n.value + '\u00a0' + p.value ));
            document.getElementById("asid").appendChild(document.createElement("br"));
            document.getElementById("asid").appendChild(document.createTextNode(t.value));
            document.getElementById("asid").appendChild(document.createElement("br"));
            document.getElementById("asid").appendChild(document.createTextNode(e.value));
        }
    });


}
window.onload = init;
