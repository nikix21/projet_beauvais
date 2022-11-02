


var btn;
var liens;
var ouvert;
var corps;

var actu1;
var actu2;
var actu3;

var tourisme;

var beauvais;
var culture;

var territoire;
var europe;


function init() {
    ouvert = false;
    btn = document.getElementById("btnHmbg");
    liens = document.getElementById("liensNav");
    corps = document.body;

    actu1 = document.getElementById("actu1");
    actu2 = document.getElementById("actu2");
    actu3 = document.getElementById("actu3");

    tourisme = document.getElementById("tour");

    beauvais = document.getElementById("beauvais");
    culture = document.getElementById("culture");

    territoire = document.getElementById("territoire");
    europe = document.getElementById("europe");

    btn.addEventListener("click", SwitchNavbar);

    actu1.addEventListener("click", toActu);
    actu2.addEventListener("click", toActu);
    actu3.addEventListener("click", toActu);

    tourisme.addEventListener("click", toTourisme);

    culture.addEventListener("click", toCulture)
    beauvais.addEventListener("click", toBeauvais)

    territoire.addEventListener("click", toTerritoire)
    europe.addEventListener("click", toEurope)

}


function toActu() {
    location.replace("../page actus/actus.html")
}

function toTourisme() {
    location.replace("../tourisme/index.html")
}

function toCulture() {
    location.replace("https://culture.beauvais.fr/")
}

function toBeauvais() {
    location.replace("http://www.beauvais.fr/")
}

function toTerritoire() {
    location.replace("https://www.beauvaisisnotreterritoire.fr/")
}

function toEurope() {
    location.replace("http://www.beauvaisis.fr/l-europe-s-engage/developpement-touristique-du-beauvaisis.html")
}


function SwitchNavbar() {
    if (ouvert == false) {
        btn.classList.add("open")
        liens.classList.add("open")
        corps.style.overflow = "hidden";
        ouvert = true;
    }
    else {
        btn.classList.remove("open")
        liens.classList.remove("open")
        corps.style.overflowY = "scroll";
        ouvert = false;
    } 
}



window.addEventListener("load",init);

/*********************************Caroussel *********************************************/


var img__slider = document.getElementsByClassName('img__slider');
let nbr__img = img__slider.length;

let etape = 0;






function enleverActiveImages() {
    var img__slider = document.getElementsByClassName('img__slider');
    let nbr__img = img__slider.length;
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

function suivant () {
    var img__slider = document.getElementsByClassName('img__slider');
    let nbr__img = img__slider.length;
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}


function precedent() {
    var img__slider = document.getElementsByClassName('img__slider');
    let nbr__img = img__slider.length;
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}

setInterval(function() {
    var img__slider = document.getElementsByClassName('img__slider');
    let nbr__img = img__slider.length;
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 10000)