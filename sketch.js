const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spider


function preload() {
  
    
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,470,1200,30)

    spider=new Spider(200,200,200,200)
    
    enemy=new Enemy(1000,200,200,200)

}

function draw(){
  
background(0)  
       
Engine.update(engine);

spider.display();
 ground.display(); 
 enemy.display(); 
  
}

function keyPressed(){

if(keyCode===38){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y-20})
spider.image=loadImage("sprites/s3.png")


}

if(keyCode===40){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y+20})
spider.image=loadImage("sprites/s1.png")

}

if(keyCode===39){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x+20,y:spider.body.position.y})
spider.image=loadImage("sprites/e1.png")

}

if(keyCode===37){

    Matter.Body.setPosition(spider.body,{x:spider.body.position.x-20,y:spider.body.position.y})
    spider.image=loadImage("sprites/e3.png") 
    
 }
        
        
        



}

