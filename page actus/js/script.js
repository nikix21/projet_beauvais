

var elm;
var ouvert;

function init() {
    ouvert = false;
    elm = document.getElementById("test");
    dav = document.getElementById("ouin");

    elm.addEventListener("click", Switch);
}

function Switch() {
    if (ouvert == false) {
        elm.classList.add("open")
        ouin.classList.add("open")
        ouvert = true;
    }
    else {
        elm.classList.remove("open")
        ouin.classList.remove("open")
        ouvert = false;
    }
    
    
}


window.addEventListener("load",init);