var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var game = false;
var level = 0;



var audioblue = new Audio('./sounds/blue.mp3');
var audiored = new Audio('./sounds/red.mp3');
var audiogreen = new Audio('./sounds/green.mp3');
var audioyellow = new Audio('./sounds/yellow.mp3');
var audiowrong = new Audio('./sounds/wrong.mp3');


function nextSequence() {

    if (game==true){
        level++;
        $("h1").text("Level "+level);
    }
     var randomNumber = Math.floor(Math.random(3)*3);
     
     return randomNumber;

    

}


function randomChosenColour(){

    return buttonColours[nextSequence()];

}



    gamePattern.push(randomChosenColour());


function flash(gamePattern){
    
        eval('audio'+gamePattern).play();
        setTimeout( function(){ $("#"+gamePattern).toggleClass('pressed');}, 100);
        $("#"+gamePattern).toggleClass('pressed'); 
    
   
}

$(".btn").click( function() {

    var userChosenColour = $(this).attr("id");
    flash($(this).attr("id"));
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);
})

$(document).keypress( function(){
    if (game==false){nextSequence();
        console.log("game on");
        $("h1").text("Level 0");
    }
    
    game = true;
    console.log("keypressed");
})


function checkAnswer(currentLevel) {

console.log(currentLevel);
console.log(userClickedPattern);
console.log(gamePattern);

if (userClickedPattern[currentLevel]==gamePattern[currentLevel]) {

    console.log('success');
    console.log(gamePattern);
    
    if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }


}
else console.log('failure '+gamePattern);
}





