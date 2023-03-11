// Variables
var output = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("#random");

// Function Declarations
var colorClipboard = function(){
    output.textContent = body.style.background + ";";
};

function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math. random() * maxVal;
        randomNumber = Math. floor(randomNumber);
        randomNumber = randomNumber. toString(16);
        let randColor = randomNumber. padStart(6, 0);
        return `#${randColor. toUpperCase()}`
            return(value)
}

function bkgStyle() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

        colorClipboard()
};

function generateButton() {
    body.style.background =
        "linear-gradient(to right, "
        + generateRandomColor()
        + ", " 
        + generateRandomColor()
        + ")";

    button.style.background =
        generateRandomColor()

        colorClipboard()
}

// Working Javascript

button.addEventListener("click", generateButton)

color1.addEventListener("input", bkgStyle)

color2.addEventListener("input", bkgStyle);

console.log (
    generateRandomColor()
);