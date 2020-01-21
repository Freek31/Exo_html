
function init() {
    addOnClick1();
    addOnClick2();
}


function addOnClick1() {
    var x = document.getElementById("btn1");
    x.addEventListener("click", mafonction, false);
}
function addOnClick2() {
    var x = document.getElementById("btn2");
    x.addEventListener("click", mafonction2, false);
}


function mafonction() {

    document.getElementById("btn1").parentNode.style.backgroundColor = "red";
}

function mafonction2() {

    document.getElementById("btn2").parentNode.parentNode.style.backgroundColor = "red";
}

window.onload = init;


