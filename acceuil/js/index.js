
/*********************************navBar *********************************************/
var item = document.getElementsByClassName("nav-item");
var lien = document.getElementsByClassName("nav-link");
var liste = document.getElementsByClassName("dropdown-menu");
var img = document.getElementsByClassName("slide");


function verification(a){
    for (let i = 0; i < lien.length; i++) {
        if(a == "Présentation" ){
            aufocus(0);
        }
        if(a == "Actualités" ){
            aufocus(1);
        }
        if(a == "Aménagement" ){
            aufocus(2);
        }
        if(a == "Economie" ){
            aufocus(3);
        }
        if(a == "Habitat" ){
            aufocus(4);
        }
        if(a == "Déchet" ){
            aufocus(5);
        }
        if(a == "Culture" ){
            aufocus(6);
        }
    }
}

function aufocus(n){
    item[n].style.backgroundColor="orange";
    item[n].style.transition = "all 1s";
    liste[n].style.display= "block";
    $(".dropdown-link").slideDown("slow");
    //liste[n].style.transition = "ease 1s";
}

function pertefocus(){
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "#335494";
        liste[i].style.display = "none";
    }
}
/*********************************Fin navBar *********************************************/

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