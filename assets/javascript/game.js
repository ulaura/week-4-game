var computerChoice = Math.floor(Math.random() * (120 - 19 + 1) + 19);
//the computer needs to randomize between 19 and 120...
//I pulled this from 
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

console.log(computerChoice); //test

var crystal_1 = Math.floor(Math.random() * 12 + 1); //blue crystal
var crystal_2 = Math.floor(Math.random() * 12 + 1); //red crystal
var crystal_3 = Math.floor(Math.random() * 12 + 1); //green crystal
var crystal_4 = Math.floor(Math.random() * 12 + 1); //orange crystal

console.log(crystal_1, crystal_2, crystal_3, crystal_4); //test

var userCounter = 0;
//the number the user adds by clicking each crystal

var wins = 0;
var losses = 0;

//adding computerChoice random number to div class computer-info
$(".computer-info").html("<h2>" + computerChoice + "</h2>");


//on click functions for each crystal
$("#blue-crystal").on("click", function() {
	console.log("Previous userCounter: " + userCounter); //test
	userCounter = crystal_1 +  userCounter;
	console.log("New userCounter: " + userCounter); //test
	$("#total_score").html(userCounter);

});

$("#red-crystal").on("click", function() {
	console.log("Previous userCounter: " + userCounter); //test
	userCounter = crystal_2 +  userCounter;
	console.log("New userCounter: " + userCounter); //test
	$("#total_score").html(userCounter);

});

$("#green-crystal").on("click", function() {
	console.log("Previous userCounter: " + userCounter); //test
	userCounter = crystal_3 +  userCounter;
	console.log("New userCounter: " + userCounter); //test
	$("#total_score").html(userCounter);

});

$("#orange-crystal").on("click", function() {
	console.log("Previous userCounter: " + userCounter); //test
	userCounter = crystal_4 +  userCounter;
	console.log("New userCounter: " + userCounter); //test
	$("#total_score").html(userCounter);

});


//if else statement to see if user wins or loses
if (userCounter === computerChoice) {
	console.log("You win!");
	wins++;
	$("#wins_id").html(wins);

} else if (userCounter > computerChoice) {
	console.log("You lose!");
	losses++;
	$("#losses_id").html(losses);

};




