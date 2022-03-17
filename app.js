'use strict'

const clickOption1 = document.getElementById("option-1");
const clickOption2 = document.getElementById("option-2");

clickOption1.addEventListener("click", function() {
    alert("option 1")
});

clickOption2.addEventListener("click", function() {
    alert("option 2");

   newElements();
});

function newElements(){
    //https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b#:~:text=The%20most%20common%20way%20to,using%20inline%2Dblock%20css%20property.&text=The%20inline%2Dblock%20property%20on,like%20an%20inline%20element%20does.
    var name1 = document.createElement("Label");
    var name2 = document.createElement("Label");

    name1.innerHTML = "Actinium"
    name2.innerHTML = "Xenon"

    var elementNameDiv = document.getElementById("element-names");
    elementNameDiv.appendChild(name1);
    elementNameDiv.appendChild(name2);

    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    img1.src = "Actinium.png";
    img2.src = "Xenon.png"
    var elementIconDiv = document.getElementById("element-icons");
    elementIconDiv.appendChild(img1);
    elementIconDiv.appendChild(img2);
}
