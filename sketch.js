const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon1
var Box1 , Box2 , Box3,Box4,Box5,Box6,Box7
var Box9,Box10,Box11,Box12,Box13
var Box14,Box15,Box16
var ground1 , ground2
var rope


function preload()
{

}

function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(750,400,390,20)
    Box1 = new box1(600,370,40,40)
    Box2 = new box1(640,370,40,40)
    Box3 = new box1(680,370,40,40)
    Box4 = new box1(720,370,40,40)
    Box5 = new box1(760,370,40,40)
    Box6 = new box1(800,370,40,40)
    Box7 = new box1(840,370,40,40)
    
    Box8 = new box2(640,330,40,40)
    Box9 = new box2(680,330,40,40)
    Box10 = new box2(720,330,40,40)
    Box11 = new box2(760,330,40,40)
    Box12 = new box2(800,330,40,40)

    Box13 = new box3(680,290,40,40)
    Box14 = new box3(720,290,40,40)
    Box15 = new box3(760,290,40,40)

    Box16 = new box4(720,250,40,40)

    polygon1 = new polygon(270,300,40)

    rope = new Rope(polygon1.body,{x:270,y:300});

}


function draw()
{
    background("brown")
    Engine.update(engine);

    ground1.display();
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    Box16.display();

    polygon1.display();
    rope.display();


}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       rope.attach(polygon1.body);
       Matter.Body.setPosition(polygon1.body, {x: 270 , y: 300});
    }
}