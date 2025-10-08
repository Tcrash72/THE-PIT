var carl=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(mouseX,mouseY,255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,130,200); // center of canvas, 20px dia
  triangle(mouseX,mouseY,500,350,400,carl,carl); // center of canvas, 20px dia

strokeWeight(10);
line(carl,500,400,carl) ;
}

function mousePressed(){

  if (carl>=255) {
    carl=0;
  }else{carl=carl+5;
}
}





