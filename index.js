var makeIndexAnimate = document.querySelector(".index-welcome-message");
var animatedText = document.querySelector(".welcome-message");
var colorIndex = 0;

function changeColor() {
    var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'white'];
    animatedText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 100);

function changeIndexColor(){
    var indexColors = ['red', 'green', 'blue', 'orange', 'purple', 'black', 'white'];
    makeIndexAnimate.style.color = indexColors[colorIndex];
    colorIndex = (colorIndex + 1) % indexColors.length;
}

setInterval(changeIndexColor, 1000);