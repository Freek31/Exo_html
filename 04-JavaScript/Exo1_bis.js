


function init() {


    if (document.getElementById("btn1").parentNode.style.backgroundColor == "red") {
        color = '';
        addOnClick1(color);
    }
    else {

        color = 'red';
        addOnClick1(color);
    }

    addOnClick2();
}



function addOnClick1() {
    var x = document.getElementById("btn1");
    x.addEventListener("click", mafonction(color), false);
}
function addOnClick2() {
    var x = document.getElementById("btn2");
    x.addEventListener("click", mafonction2, false);
}


function mafonction(color) {

    document.getElementById("btn1").parentNode.style.backgroundColor = color;
}

function mafonction2() {

    document.getElementById("btn2").parentNode.parentNode.style.backgroundColor = color;
}

window.onload = init;