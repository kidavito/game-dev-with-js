window.onload = function () {
  // Canvas:
  let canvas = document.getElementById("canvas");

  // Context 2D:
  let context = canvas.getContext("2d");

  // Button with id = "jump":
  let btn = document.getElementById("jump");

  // Initial circle position:
  let x = 300;
  let y = 200; // Halve canvas height, at the middle of it.

  // Initial gravity value:
  let gravity = 0;

  // Initial time value:
  let time = Date.now(); // Time snapshot.

  // Initial counter value:
  let count = 0;

  // Initial counter display:
  context.font = "25px Arial";
  context.fillStyle = "white";
  context.fillText("Count: " + count, 20, 30);

  // Initial circle display:
  // 2 = Full circle.
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "green";
  context.fill();

  // Draw function to draw/re-draw (update) object in the canvas:
  function draw() {
    // Clearing the canvas before re-draw:
    context.clearRect(0, 0, 600, 400);

    // Redrawing the circle:
    // 2 = Full circle.
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();

    // Redrawing the "Count" value:
    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText("Count: " + count, 20, 30);

    // Time passed since this "draw" function called:
    let timePassed = (Date.now() - time) / 1000;
    time = Date.now(); // Present time comparison.

    // Add more gravity:
    if (y <= 350) {
      gravity += 500 * timePassed;
      y += gravity * timePassed;
    }
    // Note: y = 350 is the floor, y = 50 is the top (+50 is for the ball height).

    // Prevent the ball from passing the top:
    if (y <= 50) {
      y = 50;
    }

    // Reset the count when the ball reach floor:
    if (y >= 350) {
      y = 350; // Preventing from going down too far.
      count = 0;
    }

    // Loop:
    window.requestAnimationFrame(draw); // Make this draw function stay alive (keep running once it's called).
  }

  // Input actions:
  function inputActions() {
    count += 1; // Add 1 to counter.
    y -= 30; // Power to move higher.
    gravity = 30; // Update gravity.
    time = Date.now(); // Update time snapshot.
    draw(); // Call draw function to update the canvas.
  }

  // Mouse click handler:
  canvas.onmousedown = function () {
    inputActions();
  };

  // Touch screen handler:
  canvas.ontouchstart = function () {
    inputActions();
  };

  // Any key input handler:
  document.onkeydown = function () {
    inputActions();
  };

  // "Jump" button click handler:
  btn.onclick = function () {
    inputActions();
  };
};
