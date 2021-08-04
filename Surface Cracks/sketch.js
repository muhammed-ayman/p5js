
function setup() {
}

function draw() {
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
