function setup() {
  createCanvas(800, 600); // Set the size of the canvas
  background(255); // Set the background color to white
}

function draw() {
  // The draw function is intentionally left empty
  // as we only want to draw when the mouse is clicked
}

function mousePressed() {
  drawConcentricCircles(mouseX, mouseY);
}

function drawConcentricCircles(x, y) {
  let numberOfCircles = int(random(5, 10)); // Random number of circles
  let maxRadius = random(20, 100); // Maximum radius for the largest circle

  for (let i = 0; i < numberOfCircles; i++) {
    let radius = maxRadius * (i + 1) / numberOfCircles;
    let r = random(255);
    let g = random(255);
    let b = random(255);
    noFill();
    stroke(r, g, b);
    ellipse(x, y, radius * 2, radius * 2);
  }
}
