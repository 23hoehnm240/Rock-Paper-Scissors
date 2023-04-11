function rockFunction(){
var botChoice = Math.floor((Math.random()*3)+1);
if (botChoice = 1 ){
document.querySelector("h1").innerHTML="Its a Tie.";
}
else if (botChoice = 2){
document.querySelector("h1").innerHTML="Paper Covers Rock.";
}
 else {
	 document.querySelector("h1").innerHTML="Rock beats Scissors";
 }
}




function paperFunction(){
	var botChoice = Math.floor((Math.random()*3)+1);
	if (botChoice = 1 )
	 document.querySelector("h1").innerHTML="Paper Covers Rock.";
else if (botChoice = 2)
	 document.querySelector("h1").innerHTML="Its a Tie.";
 else 
	 document.querySelector("h1").innerHTML="Scissors Cuts Paper";

}



function scissorsFunction(){
var botChoice = Math.floor((Math.random()*3)+1);
if (botChoice = 1 )
	 document.querySelector("h1").innerHTML="Rock breaks Scissors.";
else if (botChoice = 2)
	 document.querySelector("h1").innerHTML="Scissors cuts Paper.";
 else 
	 document.querySelector("h1").innerHTML="Its a Tie";
}