function test () {
    console.log("animated button works as a button!");
}

function loadPageTwo () {
    window.location.href = '\pageTwo.html'
}

function stopFireworks() {
    document.getElementById('fireworks').style.animationPlayState = "paused";
    document.getElementById('fireworks1').style.animationPlayState = "paused";
    document.getElementById('fireworks2').style.animationPlayState = "paused";
}

function restartFireworks() {
    document.getElementById('fireworks').style.animationPlayState = "running";
    document.getElementById('fireworks1').style.animationPlayState = "running";
    document.getElementById('fireworks2').style.animationPlayState = "running";
}

function removeCar() {
    // Removes an element from the document
    var element = document.getElementById("car").remove();
    element.remove();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

