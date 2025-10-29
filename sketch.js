//establishing global variables for instances
let ant1;
let ant2;
let ant3;
let ant4;
let ant5;
let img1;
let img2;
let song;

function setup() {
  createCanvas(3000, 1000);
  // create the instances of the objects
  ant1 = new Ant(0, 30, 100, 50, color(214, 94, 128));
  ant2 = new Ant(0, 50, 300, 50, color(72, 145, 220));
  ant3 = new Ant(0, 40, 500, 50, color(88, 214, 141));
  ant4 = new Ant(0, 70, 700, 50, color(241, 200, 81));
  ant5 = new Ant(0, 60, 900, 50, color(158, 31, 246));
}
// loop: 0:05 -> 0:55
const loopStartSec = 5;
const loopDuration = 50;

//load images
function preload() {
song = loadSound('assets/saxophone.mp3');
img1 = loadImage('assets/grass.jpg');
img2 = loadImage('assets/finish line.jpg');

}

function draw() {
  background(220);
  //background image
  tint(255, 255, 255, 200); //allows background image to be transparent and less distracting
  image(img1, 0, 0, width  * 1, height * 1.2);
  noTint();

  //tracks
    push();
    
    stroke(88, 65, 53, 200);
    strokeWeight(10);
    fill(191, 165, 136, 200);
    rect(0, 25, width, 150);
    rect(0, 225, width, 150);
    rect(0, 425, width, 150);
    rect(0, 625, width, 150);
    rect(0, 825, width, 150);
    pop();

  //finish line image
  push();
  translate(width, 0);
  scale(-1, 1);
  image(img2, -2700, 0, 3000, height);
  pop();

  //display and move the ants
  ant1.display();
  ant2.display();
  ant3.display();
  ant4.display();
  ant5.display();
  ant1.move();
  ant2.move();
  ant3.move();
  ant4.move();
  ant5.move();

  //instruction text
  textSize(50);
  fill(0);
  text("Click to start/restart the race!", 50, 70);
}
// reset the x position of each ant to the starting position when mouse pressed
function mousePressed() {
    ant1.x = 50;
    ant2.x = 50;
    ant3.x = 50;
    ant4.x = 50;
    ant5.x = 50;

//random speeds for each ant that change upon reset
    ant1.speed = random(0, 12);
    ant2.speed = random(0, 12);
    ant3.speed = random(0, 12);
    ant4.speed = random(0, 12);
    ant5.speed = random(0, 12);

    //if mouse is pressed, start or stop clip
   if (song.isPlaying()) {
     song.stop();
     song.play(0, 1, 1, loopStartSec, loopDuration);
   } else {
     song.play(0, 1, 1, loopStartSec, loopDuration);
}
}

function Ant(tempSpeed,  tempSize, tempY, tempX, tempColor) {
  this.speed = tempSpeed;
  this.color = tempColor;
  this.size = tempSize;
  this.y = tempY;
  this.x = tempX;

  this.display = function() {
    fill(this.color);
    strokeWeight(4);

    //left legs
    line(this.x - this.size/4, this.y, this.x - this.size/4, this.y + this.size * 0.7); // front leg
    line(this.x, this.y, this.x, this.y + this.size * 0.7); // middle leg
    line(this.x + this.size/4, this.y, this.x + this.size/4, this.y + this.size * 0.7); // back leg
    
    // Right legs
    line(this.x - this.size/4, this.y, this.x - this.size/4, this.y - this.size * 0.7); // front leg
    line(this.x, this.y, this.x, this.y - this.size * 0.7); // middle leg
    line(this.x + this.size/4, this.y, this.x + this.size/4, this.y - this.size * 0.7); // back leg

    //antennae
    line(this.x + this.size/2, this.y - this.size/6, this.x + this.size * 1.1, this.y - this.size/3); // upper antenna
    line(this.x + this.size/2, this.y + this.size/6, this.x + this.size * 1.1, this.y + this.size/3); // lower antenna

    //body
    ellipse(this.x, this.y, this.size, this.size);

    //head
    ellipse(this.x + this.size/2, this.y, this.size * 0.75, this.size * 0.75);
    
  }
    // update the x position of the ant by its speed
    this.move = function() {
    this.x = this.x + this.speed;
  }


}

