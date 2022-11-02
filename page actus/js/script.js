
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