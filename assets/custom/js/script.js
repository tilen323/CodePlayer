// Reaction Test

var start = new Date().getTime();

var bestTry = 100;

function getRandomColor() {

    var letters = "0123456789ABCDEF".split("");

    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color
}

function makeShapeAppear() {

    var left = Math.random() * 300;

    var top = Math.random() * 300;

    var width = (Math.random() * 200) + 10;

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "5px";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 1500);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    document.getElementById("spanParagraph").innerHTML = timeTaken + " sec";

    if (timeTaken < bestTry) {
        bestTry = timeTaken
        document.getElementById("bestTime").innerHTML = bestTry + " sec";

        document.getElementById("submitBestTime").innerHTML = bestTry;
        document.getElementById("hiddenTime").innerHTML = bestTry;

        $("#form-high-score").fadeIn();
    }

    appearAfterDelay();

}
