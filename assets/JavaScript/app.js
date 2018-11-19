//document.ready function 
$(document).ready(function () {

    //create global variables 
    var intervalID;
    var timerRunning = false;
    var numOfCorrect = 0;
    var numOfIncorrect = 0;
    var numOfUnanswered = 0;
    var numOfQuestions = 10;
    var time = 300;
    var converted;
    //run the on click timer function on the page load. 
    var reset;
    var start;

    //separate array for the correct anwers? maybe use the [i] to see if user guess matches a certain [i]?
    var ansArray = ['Rajah', 'Pocahontas', 'Australia', 'Thumper', 'A Pumpkin', 'A Fox', 'A Feather', 'Tinkerbell', 'Flotsam and Jetsam', 'Simba']

    //set timer to 30 seconds per questions (5 total minutes...is that too long?)

    //reset function
    var timer = {
        reset: function () {
            $("#display").text("5:00");
            timerRunning = false;
        },
        //start function
        start: function () {
            if (!timerRunning) {
                intervalID = setInterval(count, 1000);
                timerRunning = true;
            }
        },
    }

    //function for count and time converter 
    function count() {

        time--;
        converted = timeConverter(time);
        $("#display").text(converted);

    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "0";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
    //time counter will tick per second.
    function runTimer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(intervalID);
            //counter ended, call reset?
            alert("Time's Up!");
            timerRunning = false;
        }
    }
    //get the value of the correct answers 
    function checkAnswers() {
        
        var q1 = document.querySelector("input[name='q1']:checked").value;
        console.log(q1);
        var q2 = document.querySelector('input[name=q2]:checked').value;
        console.log(q2);
        var q3 = document.querySelector('input[name=q3]:checked').value;
        console.log(q3);
        var q4 = document.querySelector('input[name=q4]:checked').value;
        console.log(q4);
        var q5 = document.querySelector('input[name=q5]:checked').value;
        console.log(q5);
        var q6 = document.querySelector('input[name=q6]:checked').value;
        console.log(q6);
        var q7 = document.querySelector('input[name=q7]:checked').value;
        console.log(q7);
        var q8 = document.querySelector('input[name=q8]:checked').value;
        console.log(q8);
        var q9 = document.querySelector('input[name=q9]:checked').value;
        console.log(q9);
        var q10 = document.querySelector('input[name=q10]:checked').value;
        console.log(q10);
    };
    //need a on submit function that submits answers 

    $("#questions").on("click", function () {
        timer.start();
        runTimer();
    });

    $("#submit").on("click", function () {
        checkAnswers();
        timer.reset();
    });

    //create a for loop that will traverse that array to compare the users choice to the correct or incorrect answers and increase the score counters 
    for (let i = 0; i < numOfQuestions.length; i++) {
        if (eval('q' + i) != ansArray[i - 1]) {
            console.log("You missed question number " + i + "!");
            numOfIncorrect++;
        }
    }
    for (let i = 0; i < numOfQuestions.length; i++) {
        if (eval('q' + i) == ansArray[i - 1]) {
            console.log("You answered question number " + i) + " correctly!";
            numOfCorrect++;
        }
        else {
            numOfUnanswered++;
            console.log("You didn't answer " + numOfUnanswered + " questions");

        }
    }




    //create buttons (bootstrap or <button> in query) for the multiple choice answers 
    //---done in the html - used radio buttons---\\

    //make sure they are only allowed to register one answer
    //---done in the html with the radio buttons---\\



    //---if there's time---create gif that appears on a correct guess and if time create a separate one for an incorrect guess - maybe just one for the end? Fireworks?

    //append html (instructions div? somewhere at the bottom. maybe to replace the my-4) at the end with the nuber of correct guesses, incorrect guesses, and unanswered questions then run the reset function to begin a new game. Restart button? Play Again? Just alert it if there's no time

    //create a button (new element?) with an onclick event that resets the questions, timer, and my-4 to the original text. 
    //---someday - set up an API to bring in new questions? I'd have to rework all my html, but go back and do this after graduation---\\



});