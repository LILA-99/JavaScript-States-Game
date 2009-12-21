// File np.js
// Author: EvilPenguin| & thanks rpetrich :0P
/////////////////////////////////////////////////////////////////////
// This file contains serveral opperations for generating functions
// Source code is not available online
// Source code is not avaiable for retail use
// Source code is only for school usage
/////////////////////////////////////////////////////////////////////
//
//////////////////
// Global Variables (Have to be user because of the RandomInt(); function)
var questionsLeft;
var currentQuestionIndex;
//
// Welcome The User To NP.us
function welcomeNP(){
	// Variables
	var name;
	var html;

	// Prompt the user for their name
	name = prompt("Please Enter Your Name", "Name Please....Thanks");
		if ( name == "James" || name == "Jimmy" || name == "Emrich" ){
			//Define html
			html = "<p>Welcome " + name + " to NakedProductions!</p>";
			//Alert User
			alert("Welcome " + name + "! Enjoy your stay in this Penguin World!");
			//Change welcome area to users name
			document.getElementById("nameHTML").innerHTML = html;
		}
		else if ( name != null && name != "" ){
			//Define html
			html = "<p>Welcome " + name + " to NakedProductions!</p>";
			//Alert User
			alert("Welcome, " + name + " To NakedProductions.US");
			//Change welcome area to users name
			document.getElementById("nameHTML").innerHTML = html;
		}
}
//Loads the questions
function loadNextQuestion()
{
  //find if questionsLeft is not equal to 0
  if (questionsLeft != 0) {
	//Subtraction of questionsLeft
    questionsLeft--;
    //Randomize the number
    currentQuestionIndex = RandomInt(0, stateNAME.length);
    //Get all the values from user
    document.getElementById("questionField").value = stateNAME[currentQuestionIndex];
    document.getElementById("answerField").value = "";
  }
}
//
//First Process Ran; create questions parseInt of questionsCountField
function loadFirstQuestion()
{
  //Define questionsLeft
  questionsLeft = parseInt(document.getElementById("questionCountField").value);
  // Load function loadNextQuestion;
  loadNextQuestion();
}
//
//Check and see if users answer is correct
function checkAnswer()
{
  //Variables
  var percent;
  var userAnswer = document.getElementById("answerField").value;
  var AnswerCount = 0;
  var CorrectCount = 0;
  //Counter
  AnswerCount = document.getElementById("totalANSWER").value;
  AnswerCount = parseFloat(AnswerCount);
  //Check the Counter
  if ( isNaN(AnswerCount)){
	AnswerCount = 0;
  }
  //Counter
  CorrectCount = document.getElementById("corANSWER").value;
  CorrectCount = parseFloat(CorrectCount);
  //Check the Counter
  if (isNaN(CorrectCount)){
	CorrectCount = 0;
  }
  //Check the answer of the user
  if (userAnswer.toLowerCase() == stateCAPITAL[currentQuestionIndex].toLowerCase()) {
    alert('Correct!');
    document.getElementById("correctWRONG").value = "Correct!";
    AnswerCount = AnswerCount + 1;
    CorrectCount = CorrectCount + 1;
    loadNextQuestion();
   } 
  //If it doesn't equal the correct answer, do this
   else {
    alert('Incorrect, try again!');
    document.getElementById("correctWRONG").value = "Wrong!";
    AnswerCount = AnswerCount + 1;
    loadNextQuestion();
   }
   //Create Percentage Values
   percent = (CorrectCount / AnswerCount) * 100;
   percent = Math.floor(percent);
   //Display Everything in proper cells
   document.getElementById("totalANSWER").value = AnswerCount;
   document.getElementById("corANSWER").value = CorrectCount;
   document.getElementById("percentS").value = percent;
}
//END