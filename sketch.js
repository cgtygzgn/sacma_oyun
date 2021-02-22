let gui;

// Create a variable for your slider
let j;

// Create variables for tracking position and velocity
let x, y, velX, velY;
function preload() {
  gif = loadImage('assets/asd.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  
  // Create Joystick.
  // The last four optional arguments define minimum and maximum values 
  // for the x and y axes; minX, maxX, minY, maxY
  // The default min and max values for all four are -1 and 1.
  movement = createJoystick("Joystick", 10*windowWidth/400, 150*windowWidth/400, 100*windowHeight/400, 100*windowHeight/400, -1, 1, 1, -1);
  //looking = createJoystick("Joystick", 200*windowWidth/400, 350*windowWidth/400, 100*windowHeight/400, 100*windowHeight/400, -1, 1, 1, -1);
  // Starting position and velocity
  x     = 300;
  y     = 100;
  velX  = 0;
  velY  = 0;
}

function draw() {
  background("#242038");
  drawGui();
  
  if (movement.isChanged) {
    // Print a message when Slider 1 is changed
    // that displays its value.
    print(movement.label + " = {" + movement.valX + ", " + movement.valY + "}");
  }
  
  // Use Joystick's output to change velocity
  velX += (movement.valX) * 3;
  velY += (movement.valY) *3;  
  
  // Draw our ellipse
  fill("#7AA0FF");
  stroke("#FFFFFF")
  push();
  translate(x + velX, y + velY);
  rotate(atan(movement.valX/movement.valY))
  image(gif, -gif.width/2, -gif.height/2);
  pop();
  gif.play();
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}