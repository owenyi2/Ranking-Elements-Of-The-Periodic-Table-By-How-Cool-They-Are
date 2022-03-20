'use strict'

const elementList = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
"Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]

const clickOption1 = document.getElementById("btn-option-1");
const clickOption2 = document.getElementById("btn-option-2");
const clickBoth = document.getElementById("btn-both")

function generateTwoRandomElements(){
    var elementNum1 = Math.floor(Math.random() * 118);
    var elementNum2 = Math.floor(Math.random() * 118);

    return [elementList[elementNum1], elementList[elementNum2]];
};

function resetComparison(){
    var elements = generateTwoRandomElements();

    document.getElementById("element-name-1").innerHTML = elements[0];
    document.getElementById("element-name-2").innerHTML = elements[1];

    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    img1.src = "/images/" + elements[0] + ".png";
    alert(img1.src)
    img2.src = "/images/" + elements[1] + ".png";

    document.getElementById("element-1-icon").replaceChild(img1, document.getElementById("element-1-icon").childNodes[0]);
    document.getElementById("element-2-icon").replaceChild(img2, document.getElementById("element-2-icon").childNodes[0]);

    document.getElementById("btn-option-1").innerHTML = elements[0] + " is cooler!"
    document.getElementById("btn-option-2").innerHTML = elements[1] + " is cooler!"
};

window.addEventListener('load', (event) => {
    document.getElementById("element-1-icon").appendChild(document.createElement("img"));
    document.getElementById("element-2-icon").appendChild(document.createElement("img"));

   resetComparison(); 
});

clickOption1.addEventListener("click", function() {
    //elo and database and stuff goes here
    resetComparison(); 
});

clickOption2.addEventListener("click", function() {
    //elo and database and stuff goes here
    resetComparison(); 
});

clickBoth.addEventListener("click", function() {
    //elo and database and stuff goes here
    resetComparison(); 
});
