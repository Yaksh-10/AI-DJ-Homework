song1 = "";
song2 = "";

function setup()
{
    canvas = createCanvas(400,300)
    canvas.position(550,300);

    video = createCapture(VIDEO);
    video.hide();
}
function preload()
{
    song1 = loadSound("harrypotter.mp3");
    song2 = loadSound("music.mp3");
}
function draw()
{
    image(video,0,0,400,300)
}