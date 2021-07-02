// Put each element in the balls_arr as follows: [x,y,x-speed,y-speed,radius,red,green,blue]
// Online Preview: https://editor.p5js.org/muhammed-ayman/sketches/pZojX_Rip

let balls_arr = [[300,150,-3,4,25,225,225,0], [260,200,3,-6,50,225,225,225],[50,150,3,5,50,225,225,225], [400,150,-3,5,50,0,0,0]]

class Ball {
  constructor(x,y,xSpeed,ySpeed,r, red, green, blue, id){
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.id = id;
  }
  create(){
    fill(this.red, this.green, this.blue);
    this.circle = circle(this.x,this.y,this.r);
  }
  move(){
    if (this.x > width-this.r || this.x < this.r){
      this.xSpeed *= -1;
    }
    if (this.y > height-this.r || this.y < this.r){
      this.ySpeed *= -1;
    }
    this.y += this.ySpeed;
    this.x += this.xSpeed;
  }
  collide(){
    for (let i = this.id+1; i<balls_arr.length; i++){
      let dx = this.x - balls_arr[i].x;
      let dy = this.y - balls_arr[i].y;
      let distance = sqrt(dx*dx+dy*dy);
      let minDist = (this.r+balls_arr[i].r)/2
      if (distance < minDist){
        this.ySpeed *= -1;
        balls_arr[i].ySpeed *= -1;
        this.xSpeed *= -1;
        balls_arr[i].xSpeed *= -1;
      }
    }
  }
}

function setup() {
  createCanvas(600, 600);
  for (let i=0; i < balls_arr.length; i++){
    ball = balls_arr[i];
    ball[ball.length] = i;
    balls_arr[i] = new Ball(...ball);
  }
}

function draw() {
  background(0,225,0);
  for (let i=0; i < balls_arr.length; i++){
    balls_arr[i].create();
    balls_arr[i].move();
    balls_arr[i].collide();
  }
}
