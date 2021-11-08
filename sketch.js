
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let backgroundImg
let Bg

let inputBox
let button


function preload(){

backgroundImg = loadImage("sunrise.png");
getTime();
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  inputBox = createInput("type your name");
  inputBox.position(550,250);

  button = createButton("Submit");
  button.position(600,300);

  button.mouseClicked(()=>{
    inputBox.remove();
    button.remove();

    let date = new Date();
    let hour = date.getHours();
    
   

    if(hour>=06 && hour<=11){
    
      console.log("goodMorning");
      text("Good Morning "+inputBox.value(),500,250);
    
    }
    
    if(hour>=12 && hour<=15){
    
    
      console.log("noon");
      text("Happy Noon "+inputBox.value(),500,250);
    
    }
    
    if(hour>=16 && hour<=17){
    
      //console.log("goodREvening");
      text("Good Evening "+inputBox.value(),500,250);
    
    }
    
    else{
    //console.log("goodNight");
    
    text("Good Night "+inputBox.value(),500,250);
    
    }
  });




  
  
  
  
  
}


function draw() 
{
  if(backgroundImg){
    
  }
  background(backgroundImg);
  Engine.update(engine);
  let date = new Date();
  let hour = date.getHours();
  textSize(30);
  text("Time"+hour,30,50);

  if(hour>=06 && hour<17){


    text("goodNight",600,400);
   
      
    

  }

  mouseClicked(button);
  
}

async function getTime(){

let response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
let responseJSON = await response.json();
let dateTime = responseJSON.datetime;
let hour = dateTime.slice(11,13);
console.log(hour);

if(hour>=06 && hour<=11){

  bg = "sunrise1.png"

  console.log("goodMorning");

}

if(hour>=12 && hour<=15){


  console.log("noon");

}

if(hour>=16 && hour<=17){

  console.log("goodREvening");

}

else{
console.log("goodNight");

bg = "sunrise.png"

}

backgroundImg = loadImage(bg);


}



