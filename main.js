function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 110, 100, 400, 400);
    fill(100)
    circle(30, 30, 20);
    fill(200)
    rect(25, 30, 55, 434, 80);
    fill(100)
    circle(610, 30, 20);
    fill(200)
    rect(560, 30, 55, 434, 80);
    fill(100)
    circle(30, 460, 20);
    fill(200)
    circle(610, 460, 20);
    fill(100)
    circle(610, 460, 20);
}

function take_snapshot() {
    save('amazing.png');
}