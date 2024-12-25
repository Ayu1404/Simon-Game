var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var score = 0;
var highScore = localStorage.getItem("highScore") || 0;
$("#high-score-value").text(highScore);
var soundEnabled = true;

$(document).keypress(function() {
    if (!started) {
        startGame();
    }
});

$("#start-button").click(function() {
    if (!started) {
        startGame();
    }
});

function startGame() {
    $("#level-title").text("Level " + level);
    $("#score").show();
    $("#sound-toggle").show();
    $("#start-button").hide();
    nextSequence();
    started = true;
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$("#sound-toggle").click(function() {
    soundEnabled = !soundEnabled;
    $("#sound-toggle").text(soundEnabled ? "Mute" : "Unmute");
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            // Update the score
            score++;
            $("#score-value").text(score);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("#level-title").text("Game Over, Press Any Key or Click Start to Restart");

        // Update the highest score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            $("#high-score-value").text(highScore);
        }

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    if (soundEnabled) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    score = 0;
    $("#score-value").text(score);
    $("#score").hide();
    $("#sound-toggle").hide();
    $("#start-button").show();
}
