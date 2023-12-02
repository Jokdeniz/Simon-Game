/* MOBILE SECTION */
function mobileText() {
  var heading = document.querySelector("#level-title");
  if (window.innerWidth < 1100) {
    heading.textContent = "Press the button for start";
    document.querySelector(".mobileBtn").style.visibility = "visible";
  } else {
    heading.textContent = "Press A Key to Start";
    document.querySelector(".mobileBtn").style.visibility = "hidden";
  }
}
mobileText();
window.addEventListener("resize", mobileText);

document.querySelector(".mobileBtn").addEventListener("click", function () {
  if (gameSelector === false) {
    document.querySelector("#level-title").innerHTML = "Level " + levelCounter;
    gameSelector = true;
    setTimeout(nextSequence, 1000);
  }
});
/* END OF THE MOBILE SECTION */
var gameArray = [];
var gamerArray = [];
var gameSelector = false;
var levelCounter = 1;
var highScore = 0;
var last = 0;
var last1 = 0;
var last2 = 0;
var temp1 = 0;
var temp2 = 0;

document.addEventListener("keydown", function (event) {
  if (gameSelector === false) {
    document.querySelector("#level-title").innerHTML = "Level " + levelCounter;
    gameSelector = true;
    setTimeout(nextSequence, 1000);
  }
});

function nextSequence() {
  gamerArray = [];
  document.querySelector("#level-title").innerHTML = "Level " + levelCounter;
  var randomNumber = Math.floor(Math.random() * 4 + 1);
  gameArray.push(randomNumber);
  switch (randomNumber) {
    case 1:
      var value = "green";
      getAnime(value);
      break;

    case 2:
      var value = "red";
      getAnime(value);
      break;

    case 3:
      var value = "yellow";
      getAnime(value);
      break;

    case 4:
      var value = "blue";
      getAnime(value);
      break;

    default:
      break;
  }
}

document.querySelector(".green").addEventListener("click", function() {
  var idColor ="green";
  var valueColor = 1;
  gamerAnimate(idColor, valueColor);
})
document.querySelector(".red").addEventListener("click", function() {
  var idColor ="red";
  var valueColor = 2;
  gamerAnimate(idColor, valueColor);
})
document.querySelector(".yellow").addEventListener("click", function() {
  var idColor ="yellow";
  var valueColor = 3;
  gamerAnimate(idColor, valueColor);
})
document.querySelector(".blue").addEventListener("click", function() {
  var idColor ="blue";
  var valueColor = 4;
  gamerAnimate(idColor, valueColor);
})

function gamerAnimate(id, value) {
  gamerArray.push(value);
  var sound = new Audio("sounds/" + id + ".mp3");
  sound.play();
  document.querySelector("#" + id).classList.add("pressedGamer");
  setTimeout(function () {
    document.querySelector("#" + id).classList.remove("pressedGamer");
  }, 200);
  controlArrays(gamerArray.length - 1);

}


function controlArrays(index) {
  console.log("fener");
  if (gamerArray[index] !== gameArray[index]) {
    var soundWrong = new Audio("sounds/wrong.mp3");
    soundWrong.play();
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#011F3F";
    }, 200);
    if (window.innerWidth < 480) {
      document.querySelector("#level-title").textContent =
        "Press the button for restart";
    } else {
      document.querySelector("#level-title").textContent =
        "Press A Key to Restart";
    }
    console.log("Gamer Array: " + gamerArray);
    if (levelCounter > highScore) {
      highScore = levelCounter - 1;
      document.querySelector(".scoreValue").textContent = highScore;
    }
    scoresFunc(levelCounter - 1);
    restartGame();
  } else if (gamerArray.length === gameArray.length) {
    levelCounter++;
    counter = 0;
    setTimeout(nextSequence, 1500);
  }
}

function getAnime(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
  document.querySelector("." + color).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + color).classList.remove("pressed");
  }, 200);
}

function restartGame() {
  levelCounter = 1;
  gameArray = [];
  gamerArray = [];
  gameSelector = false;
}

function scoresFunc(score) {
  temp1 = last;
  temp2 = last1;
  last = score;
  last1 = temp1;
  last2 = temp2;
  document.querySelector(".first").innerText = last;
  document.querySelector(".second").innerText = last1;
  document.querySelector(".third").innerText = last2;
}
