var spaceImg
var iss, spacecraft ,hasDocked

hasDocked = false

function setup() {
  createCanvas(1000,800);
  
  iss = createSprite(500,200,70,50)
  iss.addImage(issImg);
  iss.scale = 0.3;
  
  spaceCraft = createSprite(500,600,70,50)
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale = 0.3;
}

function preload(){

  //loading all the images
  spaceImg= loadImage("space.jpg")
  issImg= loadImage("spacecraft.png")
  spaceCraft1= loadImage("spacecraft1.png")
  spaceCraft2= loadImage("spacecraft2.png")
  spaceCraft3= loadImage("spacecraft3.png")
  spaceCraft4= loadImage("spacecraft4.png")

}

function draw() {
  background(spaceImg);  

  if(!hasDocked){
   x = Math.random(400 , 600)
  
   if(keyDown(LEFT_ARROW)){
     spaceCraft.x= spaceCraft.x-5 
     spaceCraft.addImage(spaceCraft3)
  
   }
   
   if(keyDown(RIGHT_ARROW)){
    spaceCraft.x= spaceCraft.x+5 
    spaceCraft.addImage(spaceCraft4)
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.y= spaceCraft.y-5 
    spaceCraft.addImage(spaceCraft2)
  }
   
  if(keyDown(DOWN_ARROW)){
    spaceCraft.y= spaceCraft.y+5 
    spaceCraft.addImage(spaceCraft1)
  }
  
  //if condition to check docking
  if(spaceCraft.y < 450){
    hasDocked = true
  }
}
    
  drawSprites();
}