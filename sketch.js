let gui;

// Create a variable for your slider
let j;

// Create variables for tracking position and velocity
let x, y, velX, velY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  
  // Create Joystick.
  // The last four optional arguments define minimum and maximum values 
  // for the x and y axes; minX, maxX, minY, maxY
  // The default min and max values for all four are -1 and 1.
  j = createJoystick("Joystick", 10*windowWidth/400, 150*windowWidth/400, 100*windowHeight/400, 100*windowHeight/400, -1, 1, 1, -1);
  
  // Starting position and velocity
  x     = 300;
  y     = 100;
  velX  = 0;
  velY  = 0;
}

function draw() {
  background("#242038");
  drawGui();
  
  if (j.isChanged) {
    // Print a message when Slider 1 is changed
    // that displays its value.
    print(j.label + " = {" + j.valX + ", " + j.valY + "}");
  }
  
  // Use Joystick's output to change velocity
  velX += j.valX;
  velY += j.valY;  
  
  // Draw our ellipse
  fill("#7AA0FF");
  stroke("#FFFFFF")
  ellipse(x + velX, y + velY, 100);
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}