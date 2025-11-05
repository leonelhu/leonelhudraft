//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(220,55,44); //an RGB color for the canvas' background
  //circle
  stroke(96,71,42) // an RGB color for the circle's border
  fill(244,209,86,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,width/5,height/5,100,100); // center of canvas, 20px dia
  triangle(250,450,350,350,450,450);
  line(50,450,450,50);
  fill(109,189,113,255);
  rect(50,50,laohu,laohu);

  fill(laohu,130,250);
  ellipse(250,250,50,50);

  fill(247,209,54);
  textFont('Times New Roman');
  textSize(50);
  text("LaoYan",200,250);
}

function mousePressed(){
  laohu=laohu+5;}

