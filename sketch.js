var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
 
var particles;
var plinkos=[];
var divisions=[];
var gameState=0;
var divisionHeight=300;
var score =0;
var count=[];
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
  textSize(20)
  text("Score : "+score,20,30);
  textSize(30)
  text("500",20,550);
  text("500",100,550);
  text("500",180,550);
  text("500",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("200",580,550);
  text("200",660,550);
  text("200",740,550);


  Engine.update(engine);
  ground.display();
  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
  
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles!=null)
   {
     particles.display();

     if(particles.body.position.y>760)
     {
       if(particles.body.position.x<300)
       {
         score=score+500;
         particles=null;
         if(count>=5)gameState="end";

       }
     }
   }
   if(particles!=null)
   {
     particles.display();

     if(particles.body.position.y>760)
     {
       if(particles.body.position.x<500&&particles.body.position.x>300)
       {
         score=score+100;
         particles=null;
         if(count>=5)gameState="end";
         
       }
     }
   }
   if(particles!=null)
   {
     particles.display();

     if(particles.body.position.y>760)
     {
       if(particles.body.position.x>600)
       {
         score=score+200;
         particles=null;
         if(count>=5)gameState="end";
         
       }
    }
   
    
  }
  if (gameState==="end"){
    textSize(50);
    text("GameOver",200,400);
   }
}
function mousePressed(){
   if(gameState!=="end"){
     count++;
    particles=new Particle(mouseX,10,10,10); 
   }
  }

 
   
    
