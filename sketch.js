
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball = [];
var rope = [];
var block;
var ground;
var arrPos = 0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	block = new Block(325,200,500,30);

	ground = new Ground(400,680,800,20);

	ball[arrPos] = new Ball(100,100,25);
	rope[arrPos] = new Rope(ball[arrPos].body,{x: 225, y: 200});
	arrPos++

	ball[arrPos] = new Ball(275,400,25);
	rope[arrPos] = new Rope(ball[arrPos].body,{x: 275, y: 200});
	arrPos++

	ball[arrPos] = new Ball(325,400,25);
	rope[arrPos] = new Rope(ball[arrPos].body,{x: 325, y: 200});
	arrPos++

	ball[arrPos] = new Ball(375,400,25);
	rope[arrPos] = new Rope(ball[arrPos].body,{x: 375, y: 200});

	console.log(ball[arrPos]);


	//Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  block.display();

  ground.display();

  for(let i=0;i<=arrPos;i++)
  {
	  ball[i].display();
	  rope[i].display();
  }
  
  drawSprites();
 
}



