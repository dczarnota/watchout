//Build our environment
  //background
  //scoreboard
  //gameboard container with playing field
  d3.select('div').append('svg')
    .attr('width', 800)
    .attr('height', 500)
    .style('border', '1px solid black')
    .style('background-color', 'black');



var enemyData = [{"id": 1, "x":Math.random()*800, "y":Math.random()*500},
{"id": 2, "x":Math.random()*800, "y":Math.random()*500},
{"id": 3, "x":Math.random()*800, "y":Math.random()*500},
{"id": 4, "x":Math.random()*800, "y":Math.random()*500},
{"id": 5, "x":Math.random()*800, "y":Math.random()*500},
{"id": 6, "x":Math.random()*800, "y":Math.random()*500},
{"id": 7, "x":Math.random()*800, "y":Math.random()*500},
{"id": 8, "x":Math.random()*800, "y":Math.random()*500},
{"id": 9, "x":Math.random()*800, "y":Math.random()*500},
{"id": 10, "x":Math.random()*800, "y":Math.random()*500}];

var svg = d3.select('svg');

//DATA JOIN
var allEnemies = svg.selectAll('enemy')
.data(enemyData);

//ENTER
allEnemies.enter()
.append("image")
.attr('class', 'enemy')
.attr("xlink:href", "asteroid.png")
.attr("width", 30)
.attr("height", 30)
.attr('id', function(d){return d.id})
.attr('x', function(d){return d.x;})
.attr('y', function(d){return d.y;});

//UPDATE
var move = function() {
var transition = svg.transition().duration(750);
svg.selectAll('.enemy')
.data(enemyData)
.transition()
.duration(2000)
.attr('x', function(d){return Math.random()*800;})
.attr('y', function(d){return Math.random()*500;});
transition.allEnemies
};

setInterval(function(){ move(); }, 2000);


//Create player
  // d3.select('svg').append('image')
  // .attr('class', 'player')
  // .attr('xlink:href', 'starfox.png')
  // .attr('width', 50)
  // .attr('height', 50);
  //SVG
  //Define player (location, movement, restrictions)
  //How to move the player (click and drag)

//Collision
  //figure out a formula to define collision
  //reset score

//Score
  //determine if collision results in a highscore
  //update highscore as neeeded



