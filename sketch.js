var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var particle;
var particles = [particle];
var plinkos = [];
var divisions= [];
var divisionHeight=300;
var score =0;
var count=0;
var gameState="PLAY"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  Engine.update(engine);

  ground.display();


  //textSize(35)
  //fill("white")
 // text("Score : 0  " , 25, 40)

  textSize(20);
  fill ("grey")
  text("500",25,530)
  textSize(20);
  fill ("grey")
  text("500",100,530)
  textSize(20);
  fill ("grey")
  text("500",185,530)
  textSize(20);
  fill ("grey")
  text("500",260,530)
  textSize(20);
  fill ("grey")
  text("100",345,530)
  textSize(20);
  fill ("grey")
  text("100",425,530)
  textSize(20);
  fill ("grey")
  text("100",505,530)
  textSize(20);
  fill ("grey")
  text("200",585,530)
  textSize(20);
  fill ("grey")
  text("200",665,530)
  textSize(20);
  fill ("grey")
  text("200",745,530)

  if ( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200, 400);
     
  }

    
   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760)
     {
        if(particle.body.position.x<290 && particle.body.position.x>20)
        {
          score=score+500;
          particle=null;
          if(count>=5) {gameState == "END"};
        }
        else if(particle.body.position.x<510 && particle.body.position.x>330)
        {
          score=score+100;
          particle=null;
          if(count>=5) {gameState == "END"};
        }
        else if(particle.body.position.x<750 && particle.body.position.x>515)
        {
          score=score+200;
          particle=null;
          if(count>=5) {gameState == "END"};
        }
     }
   }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}

function mousePressed(){
 if( gameState !== "END"){
   count++;
   particle=new Particle(mouseX,10,10,10)
 }
}