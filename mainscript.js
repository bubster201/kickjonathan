var currentColor, colorLimit, colorIncrease, planetList, planetIDs, planetCount, planetTimeouts;

planetList = ["mercury-count", "venus-count", "earth-count", "mars-count", "jupiter-count", "saturn-count", "uranus-count", "neptune-count", "pluto-count"];
planetIDs = ["mercury-id", "venus-id", "earth-id", "mars-id", "jupiter-id", "saturn-id", "uranus-id", "neptune-id", "pluto-id"];
planetTimeouts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
planetCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]
currentColor = 0;
colorLimit = 50;
colorIncrease = true;

for (var j = 0; j < planetTimeouts.length; j++) {
    document.getElementById(planetIDs[j]).style.background = "#000000";
}

var playEffect = function(planetID, increment) {
	var planet = document.getElementById(planetID).style;
	planet.transition = "none";
  planet.width = "15px";
 	planet.height = "15px";
  planet.borderRadius = "10000px";
  planet.background = "rgba(255, 255, 255, 0.6)";
  setTimeout(function() {
  	planet.transition = "width 0.4s, height 0.4s, background 0.4s";
    planet.width = "10px";
    planet.height = "10px";
    planet.background = "#000000";
  }, 500);
  planetCount[increment] += 1;
  document.getElementById(planetList[increment]).innerHTML = planetCount[increment];
}

var playLoop = function() {
  for (var j = 0; j < planetTimeouts.length; j++) {
    planetTimeouts[j] -= 1;
  }
  //var offsets = document.getElementById("mercury-id").getBoundingClientRect(
  //var top = Math.floor(offsets.top + window.pageYOffset);
  for (var i = 0; i < planetIDs.length - 1; i++) {
    var offset = document.getElementById(planetIDs[i]).getBoundingClientRect();
    var top = Math.floor(offset.top + window.pageYOffset);
    var left = Math.floor(offset.left + window.pageXOffset);
    if (top > 309 && top < 315 && left > 462 && planetTimeouts[i] <= 0) {
     	planetTimeouts[i] = 500;
      playEffect(planetIDs[i], i);
    }
  }

  setTimeout(function() {
    playLoop();
  }, 1);
}

/*
var updateColor = function() {
  if (colorIncrease) {
    currentColor += 1;
    if (currentColor > colorLimit) {
      colorIncrease = false;
    }
    document.body.style.background = "rgb(0, 1, " + currentColor + ")";


  } else {
    currentColor -= 1;
    if (currentColor < 0) {
      colorIncrease = true;
    }
    document.body.style.background = "rgb(0, 0, " + currentColor + ")";
  }
  setTimeout(function() {
    updateColor();
  }, 300);
}
updateColor();
*/
playLoop();


