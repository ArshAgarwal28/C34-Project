const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var database;

var drawing;
var currentPath;
var userDefinedStroke = 2;

function setup(){
    var canvas = createCanvas(600,600);
    canvas.mousePressed(startPath);
    engine = Engine.create();
    world = engine.world;

    drawing = [];
    currentPath = [];
}

function draw(){
    background("black")
    Engine.update(engine);
     
    if (mouseIsPressed) {
        var position = {
            x: mouseX, 
            y: mouseY
        };

        currentPath.push(position);
    }


    stroke(255);
    strokeWeight(userDefinedStroke);
    noFill();
    for(var i=0; i<drawing.length; i++){
        console.log(drawing)

        var path = drawing[i];
        beginShape();

        for(var j=0; j<path.length; j++){
            vertex(path[j].x, path[j].y);
        }
        endShape();
    }
}

function startPath() {
    currentPath = [];
    drawing.push(currentPath);
}

