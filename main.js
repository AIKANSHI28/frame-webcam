function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill(139,0,0)
    color(139,0,0)
    circle(40, 50, 70);

    fill(139,0,0)
    color(139,0,0)
    circle(600, 50, 70);

    fill(139,0,0)
    color(139,0,0)
    circle(40, 440, 70);

    fill(139,0,0)
    color(139,0,0)
    circle(600, 440, 70);

    fill(0,128,0)
    color(0,128,0)
    rect(10,100 , 55, 55);

    fill(0,128,0)
    color(0,128,0)
    rect(10,200 , 55, 55);


    fill(0,128,0)
    color(0,128,0)
    rect(10,300 , 55, 55);

    fill(0,128,0)
    color(0,128,0)
    rect(570,100 , 55, 55);

    fill(0,128,0)
    color(0,128,0)
    rect(570,200 , 55, 55);


    fill(0,128,0)
    color(0,128,0)
    rect(570,300 , 55, 55);


    fill(0,128,0)
    color(0,128,0)
    rect(100, 20, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(200, 20, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(300, 20, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(400, 20, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(500, 20, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(100, 410, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(200, 410, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(300, 410, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(400, 410, 55, 55, 20);

    fill(0,128,0)
    color(0,128,0)
    rect(500, 410, 55, 55, 20);

}
function take_snapshot(){
    save("student_name.jpg")
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
