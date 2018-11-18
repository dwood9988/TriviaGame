//create global variables 
var numOfCorrect = 0;
var numOfIncorrect = 0;
var numOfUnanswered = 0;
var numOfQuestions = 10;
//separate array for the correct anwers? maybe use the [i] to see if user guess matches a certain [i]?
var ansArray = ['Rajah', 'Pocahontas', 'Australia', 'Thumper', 'A Pumpkin', 'A Fox', 'A Feather', 'Tinkerbell', 'Flotsam and Jetsam', 'Simba']
//get the value of the correct answers 
var q1 = document.forms['disney-quiz']['q1'].value;
var q2 = document.forms['disney-quiz']['q2'].value;
var q3 = document.forms['disney-quiz']['q3'].value;
var q4 = document.forms['disney-quiz']['q4'].value;
var q5 = document.forms['disney-quiz']['q5'].value;
var q6 = document.forms['disney-quiz']['q6'].value;
var q7 = document.forms['disney-quiz']['q7'].value;
var q8 = document.forms['disney-quiz']['q8'].value;
var q9 = document.forms['disney-quiz']['q9'].value;
var q10 = document.forms['disney-quiz']['q10'].value;

//create a for loop that will traverse that array to compare the users choice to the correct or incorrect answers and increase the score counters 
for (let i = 0; i < numOfQuestions.length; i++) {
    if (eval('q' + i) == '') {
        console.log("You missed question number " + i + "!");
        numOfIncorrect++
    }
}
for (let i = 0; i < numOfQuestions.length; i++) {
    if (eval('q' + i) == ansArray[i - 1]) {
        console.log("You answered question number " + i) + " correctly!";
        numOfCorrect++
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


//need a on submit function that submits answers 
function onSubmit() {
    alert("It's Working!")
}