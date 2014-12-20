//developed by Aaron Strohl

//loads main function
//window.onload = flerp;
//button array
var allButtons = new Array();
// data array, to determine winner
var data = new Array();
// determines how many moves have been done, once 9 have been completed, and no winner has been determined, a draw has occured. 
var moves = 0;
//counts amount of wins. 
var wins = 0;
//header
document.write("<h1> TOE! </h1>");
//build the board, called from the bb.js file
buildboard();
//set up the board and assign functions to the buttons
function startGame()
{ 
	//build board
	//reset the moves variable.
	moves = 0;
	allButtons = document.getElementsByTagName("img");
	for(var k = 0; k < allButtons.length; k++)
	{ 
		//sets the data array, allbuttons id (for resetting the array). builds the board and attaches event handlers.
		data[k] = "";
		allButtons[k].id = 0;
		allButtons[k].name = k;
		allButtons[k].src = "box.png";
		allButtons[k].onclick = changeTurn;
		allButtons[k].onmouseover = tick;
		allButtons[k].onmouseout = out;
	}	

}
//main function that determines winner, image source, changes turns, etc.
function changeTurn() {
//if the button has not been clicked yet, the id will be 0 else it will be 1.
	 if(this.id == 0)
		{
				//change the source of the image, and make the value of the button x - this helps determine a winner.
				this.src = "x.png";
				this.value = "x";	
		}
	else{
//if the id is 1, the button has already been taken. 
	return alert("this place is already been taken");
	}
	//if the button is clicked and the source changes, change the id of the button to 1 to symbolize it has been set.
	this.id = 1;

	if(checkwin(this.name, this.value) == 1)
	{
		wins++;
		alert("X has won "+ wins + " times!");
		reset();
		aimove();
	}
	else
		aimove();

	if(moves == 9)
	{
		alert("tie");
		reset();
	}

}


//changes the picture of the button, depending on the player, on hover over 
// to the players appropriate faction, (x's or o's)
function tick() {
	if(this.id == 0)
	this.src = "x.png";
}

//check to see if the player has used the box,
//if so, don't change source of button on hover out
//if not, change the source of the button on hover out to box.png
function out() {
	if (this.id == 0)
	this.src = "box.png";
}


//randomly generates a number between 1-9 for the AI.
function randomint(){
	var x = Math.floor(Math.random()*9);
	return x;
}

//function that serves as the artificial intelligence. 
//a little recursion! Not intelligent AI at the moment.
function aimove(){
//checks how many moves have occurred. if all 9 moves have happened, we have a tie!
	if(moves == 9)
	{
		alert("tie");
		reset();
	}

	rand = randomint();

	if(allButtons[rand].id == 0) //base case; will break the recursive loop
	{
		allButtons[rand].src = "o.png";
		allButtons[rand].value = "o";
		allButtons[rand].id = true;
		if (checkwin(allButtons[rand].name, allButtons[rand].value) == 2)
		{
			alert("O wins!");
			reset();
		}
	}
	else
	aimove(); //recurse this

}
//lowest level of abstraction to find winner, possible use a for loop?
//could also be done with cases but I'm not sure if it's more efficient or not. Not too worried about the implementation at the moment. 
function checkwin(place, who){
data[place] = who;
moves++;
if(data[0] == "x" && data[1] == "x" && data[2] == "x")
return 1;
if(data[3] == "x" && data[4] == "x" && data[5] == "x")
return 1;
if(data[6] == "x" && data[7] == "x" && data[8] == "x")
return 1;
if(data[0] == "x" && data[3] == "x" && data[6] == "x")
return 1;
if(data[1] == "x" && data[4] == "x" && data[7] == "x")
return 1;
if(data[2] == "x" && data[5] == "x" && data[8] == "x")
return 1;
if(data[0] == "x" && data[4] == "x" && data[8] == "x")
return 1;
if(data[6] == "x" && data[4] == "x" && data[2] == "x")
return 1;

if(data[0] == "o" && data[1] == "o" && data[2] == "o")
return 2;
else if(data[3] == "o" && data[4] == "o" && data[5] == "o")
return 2;
else if(data[6] == "o" && data[7] == "o" && data[8] == "o")
return 2;
else if(data[0] == "o" && data[3] == "o" && data[6] == "o")
return 2;
else if(data[1] == "o" && data[4] == "o" && data[7] == "o")
return 2;
else if(data[2] == "o" && data[5] == "o" && data[8] == "o")
return 2;
else if(data[0] == "o" && data[4] == "o" && data[8] == "o")
return 2;
else if(data[6] == "o" && data[4] == "o" && data[2] == "o")
return 2;


}

function reset(){
 startGame();
}
