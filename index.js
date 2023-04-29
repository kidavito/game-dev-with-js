window.onload = function () {
  // Button with id = "jump":
  let btn = document.getElementById("jump");
  let count = 0;

  // Canvas:
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  // Initial circle position:
  var x = 300;
  var y = 350;

  // Initial circle:
  // 2 = Full circle.
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();

  // Initial the "Count" value:
  context.font = "25px Arial";
  context.fillStyle = "white";
  context.fillText("Count: " + count, 20, 30);

  // Draw function to draw/re-draw object in the canvas:
  function draw() {
    // Clearing the canvas:
    context.clearRect(0, 0, 600, 400);

    // Redrawing the circle:
    // 2 = Full circle.
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // Redrawing the "Count" value:
    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText("Count: " + count, 20, 30);

    // Return the ball to the bottom after reach the top:
    if (y <= 25) {
      (y = 350), (count = 0);
    }

    // Game loop:
    window.requestAnimationFrame(draw); // call it continuously as the game loop.
  }

  // "Jump" Button click handler:
  btn.onclick = function () {
    count += 1;

    // Changing the y position:
    y -= 25;

    // Call the draw function:
    draw();
  };

  // Keyboard input handler (Press any keyboard button):
  document.onkeydown = function () {
    count += 1;

    // Changing the y position:
    y -= 25;

    // Call the draw function:
    draw();
  };

  // Touch input handler (Touch any part of the screen):
  // Use "onmousedown" for click action.
  document.ontouchstart = function () {
    count += 1;

    // Changing the y position:
    y -= 25;

    // Call the draw function:
    draw();
  };
};
