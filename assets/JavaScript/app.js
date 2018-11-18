//document.ready function 
$(document).ready(function () {

    //create global variables 
    var intervalID;
    var timerRunning = false;
    var numOfCorrect = 0;
    var numOfIncorrect = 0;
    var numOfUnanswered = 0;
    var numOfQuestions = 10;
    var count = 50000;
    //run the on click timer function on the page load. 
    var reset;
    var start;
    window.onload = function () {
        $("#reset").on("click", "btn btn-info btn-lg");
        $("#start").on("click", name.q1);
    };

    //separate array for the correct anwers? maybe use the [i] to see if user guess matches a certain [i]?
    var ansArray = ['Rajah', 'Pocahontas', 'Australia', 'Thumper', 'A Pumpkin', 'A Fox', 'A Feather', 'Tinkerbell', 'Flotsam and Jetsam', 'Simba']
    console.log(ansArray);
    //reset function
    var timer = {
        reset: function () {
            $("#display").text("5:00");
            timerRunning = false;
        },
        //start function
        start: function () {
            if (!timerRunning) {
                intervalId = setInterval(timer.count, 1000);
                timerRunning = true;
            }
        },
    }

    //function for count and time converter 
    function count() {

        time--;
        var converted = timeConverter(time);
        $("#display").text(converted);

    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 5);
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
    var counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        console.log(count);
        if (count <= 0) {
            clearInterval(counter);
            //counter ended, call reset?
            alert("Time's Up!");
            timerRunning = false;
        }
        if (count <= 0) {
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML = count;
    }



    //get the value of the correct answers 
    // var q1 = document.querySelector('input[name=q1]:checked');
    // console.log(q1);
    // var q2 = document.querySelector('input[name=q2]:checked');
    // console.log(q2);
    // var q3 = document.querySelector('input[name=q3]:checked');
    // console.log(q3);
    // var q4 = document.querySelector('input[name=q4]:checked');
    // console.log(q4);
    // var q5 = document.querySelector('input[name=q5]:checked');
    // console.log(q5);
    // var q6 = document.querySelector('input[name=q6]:checked');
    // console.log(q6);
    // var q7 = document.querySelector('input[name=q7]:checked');
    // console.log(q7);
    // var q8 = document.querySelector('input[name=q8]:checked');
    // console.log(q8);
    // var q9 = document.querySelector('input[name=q9]:checked');
    // console.log(q9);
    // var q10 = document.querySelector('input[name=q10]:checked');
    // console.log(q10);

    //create a for loop that will traverse that array to compare the users choice to the correct or incorrect answers and increase the score counters 
    for (let i = 0; i < numOfQuestions.length; i++) {
        if (eval('q' + i) == '') {
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

    //set time out to 30 seconds per questions (5 total minutes...is that too long?)


    //---done in the html---\\
    //create buttons (bootstrap or <button> in query) for the multiple choice answers 
    //---done in the html---\\
    //make sure they are only allowed to register one answer
    //---done in the html---\\



    //---if there's time---create gif that appears on a correct guess and if time create a separate one for an incorrect guess

    //append html (instructions div? somewhere at the bottom. maybe to replace the my-4) at the end with the nuber of correct guesses, incorrect guesses, and unanswered questions.

    //create a button (new element?) with an onclick event that resets the questions, timer, and my-4 to the original text. 
    //---someday - set up an API to bring in new questions? I'd have to rework all my html, but go back and do this after graduation---\\


   
});
 //need a on submit function that submits answers 
 function onSubmit() {
    alert("It's Working!")
}