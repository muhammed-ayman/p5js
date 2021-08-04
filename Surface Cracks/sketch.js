let arcsNumber = 0;
let counter = 0;

function setup() {
  arcsNumber = Math.ceil(random(10,20));
  createCanvas(600, 600);
  background(225);
}

function draw() {
  if (arcsNumber > 0){
    noFill();
    let arcObj = new arc(random(500),random(500), random(-PI/6,PI/4), random(PI/4,PI));
    arcObj.draw();
    arcsNumber -= 1;
  } else{
    noLoop();
  }
}

class arc {
  constructor(x, y, theta_one, theta_two){
    this.xPosition = x;
    this.yPosition = y;
    this.theta_one = theta_one;
    this.theta_two = theta_two
  }
  draw(){
    translate(this.xPosition, this.yPosition);
    beginShape();
    let arcLengthStart = random(this.theta_one, this.theta_two);
    let randomNum = random(0,2);
    let initR = random(width/2);
    let finalR = initR+5;
    for(var i = arcLengthStart; i < this.theta_two; i+= 0.1){
      let r = random(initR,finalR);
      let x = r*cos(i);
      let y = r*sin(i);
      strokeWeight(random(1.5));
      stroke(128, 128,128, random(60, 90));
      if (randomNum <= 1){
        x,y = y,x;
      }
      vertex(x,y);
    }
    endShape();
    this.radomizeXY();
  }
  radomizeXY(){
    this.xPosition = random(width);
    this.yPosition = random(height);
  }
}
