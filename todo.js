var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");


// background Gradient js
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
};

function randomGradient() {
    if (xyz() > 0 && input.value.trim().length > 0) {
        abc();

    }

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);

function checkList(){
}
// todo list js
function abc() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    var x1 = Math.floor(Math.random() * 256);
    var y1 = Math.floor(Math.random() * 256);
    var z1 = Math.floor(Math.random() * 256);

    var x2 = Math.floor(Math.random() * 256);
    var y2 = Math.floor(Math.random() * 256);
    var z2 = Math.floor(Math.random() * 256);

    var bgColor1 = "rgb(" + x1 + "," + y1 + "," + z1 + ")";
    var bgColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";

    body.style.background = "linear-gradient(to right, " + bgColor1 + ", " + bgColor2 + ")";
    css.textContent = body.style.background + ";"
    input.value = ""

}



function xyz() {
    return input.value.length;
}

button.addEventListener("click", function () {
    if (xyz() > 0 && input.value.trim().length > 0) {

        abc();

    }
});

input.addEventListener("keypress", function (event) {
    if (xyz() > 0 && event.keyCode === 13 && input.value.trim().length > 0) {

        abc();
    }
});

function mylist(){
if ( input.value =="") {
    alert("You must write something!");
}    
}

function myCopy(){
    document.getElementById("copy").innerHTML="You copied text!"
}