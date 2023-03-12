let redColor = document.querySelector(".red");
let yellowColor = document.querySelector(".yellow");
let greenColor = document.querySelector(".green");
let changeSwitcher = document.querySelector('.traffic-switcher');

let i = 1;

function changeColor() {
    if (i == 1) {
        redColor.style.backgroundColor = "red";
        yellowColor.style.backgroundColor = "black";
        greenColor.style.backgroundColor = "black";

    } else if (i == 2) {
        redColor.style.backgroundColor = "black";
        yellowColor.style.backgroundColor = "yellow";
        greenColor.style.backgroundColor = "black";

    } else if (i == 3) {
        redColor.style.backgroundColor = "black";
        yellowColor.style.backgroundColor = "black";
        greenColor.style.background = "green";
        i = 0;
    }
}

changeSwitcher.addEventListener("click", function () {
    changeColor();
    i++;
});