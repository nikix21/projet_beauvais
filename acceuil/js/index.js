


var btn;
var liens;
var ouvert;
var corps;

function init() {
    ouvert = false;
    btn = document.getElementById("btnHmbg");
    liens = document.getElementById("liensNav");
    corps = document.body;

    btn.addEventListener("click", SwitchNavbar);

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