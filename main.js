canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 75;
rover_height = 60;
rover_x = 10;
rover_y = 10;

background_image = "istockphoto-1277468083-640x640.jpg";
rover_image = "car.png";



function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground (){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover (){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        console.log("up");
        up();
    }

    if(keyPressed == '40')
    {
        console.log("down");
        down();
    }

    if(keyPressed == '37')
    {
        console.log("left");
        left();
    }

    if(keyPressed == '39')
    {
        console.log("right");
        right();
    }
}
function up()
{
	if(rover_y >=0){
		rover_y=rover_y -10;
		console.log("when up arrow is pressed, x="+rover_x+"| y="+rover_y);
		uploadBackground();
		uploadrover();
        test();
	}

}

function down()
{
	if(rover_y <=500){
		rover_y +=10;
		console.log("when down arrow is pressed, x="+rover_x+"| y="+rover_y);
		uploadBackground();
		uploadrover();
        test();
	}
}

function left()
{
	if(rover_x >=0){
		rover_x-=10;
		console.log("when left arrow is pressed, x="+rover_x+"| y="+rover_y);
		uploadBackground();
		uploadrover();
        test();
	}
}

function right()
{
	if(rover_x <=700){
		rover_x +=10;
		console.log("when right arrow is pressed, x="+rover_x+"| y="+rover_y);
		uploadBackground();
		uploadrover();
        test();
	}
}

function test()
{
    if(rover_x == 90 && rover_y >= 320 && rover_y <= 390){
        console.log("Hurdle");
        document.getElementById('hurdle').innerHTML = 'HURDLE!';
    }
}