var balloon,balloonImage1,balloonImage2;
var database,position;
var firebase;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
  database=firebase.database();
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  // create database and position variable here
var positionRef = database.ref("balloon/position");
//on listener : reading information/data from the database
positionRef.on("value",readPosition,ShowError);


  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

    //write code to move air balloon in left direction
    if(keyDown(LEFT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      balloon.x=balloon.x-10;
  }
    //write code to move air balloon in right direction
    else if(keyDown(RIGHT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      balloon.x=balloon.x+10;
    }
    //write code to move air balloon in up direction
    else if(keyDown(UP_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      balloon.y=balloon.y-10;
    }
    //write code to move air balloon in down direction
    else if(keyDown(DOWN_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      balloon.y=balloon.y+10;
    }
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readPosition(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}
function ShowError(){
  console.log("ERROR")
}


