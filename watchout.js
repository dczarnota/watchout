d3.select('div').append('svg')
  .attr('width', 800)
  .attr('height', 500)
  .style('border', '1px solid black')
  .style('background-color', 'black')
  .style('padding', '20px');

var enemyData = [{"id": 1, "x":Math.random()*800, "y":Math.random()*500},
{"id": 2, "x":Math.random()*800, "y":Math.random()*500},
{"id": 3, "x":Math.random()*800, "y":Math.random()*500},
{"id": 4, "x":Math.random()*800, "y":Math.random()*500},
{"id": 5, "x":Math.random()*800, "y":Math.random()*500},
{"id": 6, "x":Math.random()*800, "y":Math.random()*500},
{"id": 7, "x":Math.random()*800, "y":Math.random()*500},
{"id": 8, "x":Math.random()*800, "y":Math.random()*500},
{"id": 9, "x":Math.random()*800, "y":Math.random()*500},
{"id": 10, "x":Math.random()*800, "y":Math.random()*500},
{"id": 11, "x":Math.random()*800, "y":Math.random()*500},
{"id": 12, "x":Math.random()*800, "y":Math.random()*500},
{"id": 13, "x":Math.random()*800, "y":Math.random()*500},
{"id": 14, "x":Math.random()*800, "y":Math.random()*500},
{"id": 15, "x":Math.random()*800, "y":Math.random()*500}];

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

move();
setInterval(function(){ move(); }, 2000);

//DRAG
var drag = d3.behavior.drag()
.on('drag', dragmove);

function dragmove(d){
  var x = d3.event.x;
  var y = d3.event.y;
  d3.select(this).attr('x', x);
  d3.select(this).attr('y', y);
}

//PLAYER
var player = d3.select('svg').append('image')
  .attr('class', 'player')
  .attr('xlink:href', 'starfox.png')
  .attr('width', 50)
  .attr('height', 50)
  .attr('x', 400)
  .attr('y', 250)
  .call(drag);



//COLLISION
var score = 0;
var highScore = 0;
var collisionCounter = 0;

var collision = function() {
var isCollision = false;

  var enemy = d3.selectAll('.enemy');
  var player = d3.select('.player');


  enemy.each(function() {
    var pX = parseInt(player.attr('x'));
    var eX = parseInt(d3.select(this).attr('x'));

    var pY = parseInt(player.attr('y'));
    var eY = parseInt(d3.select(this).attr('y'));
    var xDiff = Math.abs(pX - eX);
    var yDiff = Math.abs(pY - eY);

    var distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

    if(distance < 10){
      collisionCounter++;
      d3.select('.scoreboard .collisions span').text(collisionCounter);
      var tempScore = score;
      if(score > highScore){
        highScore = score;
        d3.select('.scoreboard .high span').text(highScore);
      }
      score = 0;
    }
  });
};

d3.timer(collision);

var scoreBoard = function(){
  score += 1;
  d3.select('.scoreboard .current span').text(score);
};

setInterval(function(){ scoreBoard(); }, 200);
