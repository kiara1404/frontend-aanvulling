/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function showOpties(){
    var x = document.getElementsByClassName("filterform");
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    }

document.getElementById('filter').addEventListener('click', showOpties);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function showSlider(){
    var a = document.getElementById("afstand-slider");
    if (a.style.display === "block"){
        a.style.display = "none";
    }
    else {
        a.style.display = "block";
    }
    }

document.getElementById('filter-afstand').addEventListener('click', showSlider);

function showKeuken(){
    var b = document.getElementById("keuken");
    if (b.style.display === "block"){
        b.style.display = "none";
    }
    else {
        b.style.display = "block";
    }
    }

document.getElementById('filter-keuken').addEventListener('click', showKeuken);


var prijsSlider = document.getElementById("myPriceRange");
var prijsOutput = document.getElementById("demoPrijs");

prijsOutput.innerHTML = prijsSlider.value;

prijsSlider.oninput = function() {
    prijsOutput.innerHTML = this.value;
}

function showPrijs(){
    var a = document.getElementById("prijs-slider");
    if (a.style.display === "block"){
        a.style.display = "none";
    }
    else {
        a.style.display = "block";
    }
    }

document.getElementById('filter-prijs').addEventListener('click', showPrijs);


function showDieet(){
    var c = document.getElementById("dieet");
    if (c.style.display === "block"){
        c.style.display = "none";
    }
    else {
        c.style.display = "block";
    }
    }

document.getElementById('filter-dieet').addEventListener('click', showDieet);