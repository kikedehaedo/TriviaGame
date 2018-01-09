
//Global
// ====================================================


	var counter = 0;

	var timeleft = 180;

	//turns the timeleft into minutes and seconds

	function timeConvertSeconds(s) {
		var min = Math.floor(s / 60);
		var sec = s % 60;

		if(min < 10) {
			min = "0" + min;
		}

		if(min === 0) {
			min = "00";
		}

		if(sec < 10) {
			sec = "0" + sec;
		}

		return min + ':' + sec;

		if(min && sec === 0) {
			clearInterval(countdown, 1000);// was supposed to stop countdown
		}


	}

	//=================================================

	//var for display

	var countdownDisplay = $("#display");

	//================================================

	countdownDisplay.html(timeConvertSeconds(timeleft-counter));

	function countdown() {
		counter++;
		countdownDisplay.html(timeConvertSeconds(timeleft-counter));

	};

	//runs countdown function, counts down every second

	setInterval(countdown, 1000);


// Questions

function question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

question.prototype.correctAnswer = function (choice) {
	return choice === this.answer;

}


function quiz(questions) {

	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

// Quiz part

quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;

}

quiz.prototype.guess = function(answer) {
	this.questionIndex++;

	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}
}

//App

function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}

	else {
		//show question

		var element = $("#question1");
		element.innerHTML = quiz.getQuestionIndex().text;

		//connect choices to their element id as well
	}
}


// question Array. Each question has the question, then the choices, then the answer.
var questions = [
	new question ("What colors make purple?", ["blue + yellow", "orange + blue", "blue + red"], "blue + red"),
	new question ("Which of these are complementary?", ["blue + orange", "red + green", "all of the above"], "all of the above"),
	new question ("What are the primary colors?", ["blue, red and yellow", "purple, orange and green", "blue, green and yellow"], "blue, red and yellow"),
	new question ("What's your favorite color?", ["pink", "purple","blue"], "pink"),
	new question ("What's the color of the sky?", ["blue", "light blue", "pink"], "pink"),
	new question ("Fill in the blank: 'No mistakes,______'", ["or else", "only happy accidents", "or you're screwed"], "only happy accidents")
	];

var quiz = new quiz(questions);

populate();

// Need to make the questions clickable- show user what they clicked on





























//$("p").removeClass("hideTimeout");







//Timer Object End 
// ======================================================	


//Question 2 Funtion

//Question 3 Function

//Question 4 Functiion 

//Question 5 Function

//Question 6 Function

//Congratulations page function

//Final screen function




//"hide" other questions and only "show" the question the user is on. OR push new html maybe.
// Browser opens and 60 second countdown begins. 
//if user guesses correct answer for question #1 then show congratulations screen, and move on to question 2
//if user guesses wrong then show a thumbs down icon screen, and move on to next question
//reset timer to 60 seconds for every new question

//hide html of questions that you aren't on- and only show html of questions that you are on

//show css and html for final result page, and hide html and css for last few pages. 
