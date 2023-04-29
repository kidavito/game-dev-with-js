window.onload = function () {
  // Button with id = "jump":
  let btn = document.getElementById("jump");
  let count = 0;

  // Button click handler:
  btn.onclick = function () {
    count += 1;
    y -= 25;

    // Changing the y position:
    y -= 25;

    function draw() {
      // Clearing the canvas:
      context.clearRect(0, 0, 600, 400);

      // Redrawing the circle:
      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();

      // Drawing the "Count" value:
      context.font = "25px Arial";
      context.fillStyle = "white";
      context.fillText("Count: " + count, 20, 30);
    }

    // Game loop:
    window.requestAnimationFrame(draw); // call it continuously as the game loop.
  };

  // User input:
  document.onkeydown = function () {
    count += 1;
    y -= 25;
  };
  document.ontouchstart = function () {
    count += 1;
    y -= 25;
  };

  // Canvas:
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  // Circle position:
  var x = 300;
  var y = 350;

  // Circle:
  // 2 = Full circle.
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();
};
