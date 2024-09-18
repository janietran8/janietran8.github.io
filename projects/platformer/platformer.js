$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(0,700, 200, 100); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(900, 260, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(600, 150, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(600, 600, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(1200, 390, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(300, 700, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(900, 490, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(400, 240, 80, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(0, 150, 80, 40); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(200, 150, 80, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(660, 390, 100, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(400, 390, 100, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(150, 390, 100, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(0, 390, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen




    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 900, 680,); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("database", 1200, 680,); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("database", 600, 680,); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("kennedi", 1300, 350, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("max", 15, 100, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("steve", 420, 100, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 430, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("kennedi", 0, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 780, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 270, 1800); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 150, 1800); // cannon on left wall, 600px down, shooting once per second
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
