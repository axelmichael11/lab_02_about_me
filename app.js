'use strict';

console.log('suh dude');
var question1 = 'do you think i like basketball?';
var question2 = 'do you think soccer is my favorite sport??';
var question3= 'do you think thai food is my favorite food??';
var question4= 'do you think my favorite color is blue??';
var question5= 'do you think I like writing JS?!???!?';
var question6= 'SOOO what do you think is my favorite number?!?'

var right= 'you are right!!!!';
var wrong= 'you are wrong....';

var answer1= prompt(question1);
var answer2= prompt(question2);
var answer3= prompt(question3);
var answer4= prompt(question4);
var answer5= prompt(question5);
var answer6= prompt(question6);


document.getElementById("question1").innerHTML = question1;
document.getElementById("question2").innerHTML = question2;
document.getElementById("question3").innerHTML = question3;
document.getElementById("question4").innerHTML = question4;
document.getElementById("question5").innerHTML = question5;
document.getElementById("question6").innerHTML = question6;

if (answer1.trim().toUpperCase()== 'YES' || answer1.trim()=='y' ) {
  document.getElementById("answer1").innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById("answer1").innerHTML = wrong;
  console.log(wrong);
}


if (answer2.trim().toUpperCase()== 'YES' || answer2.trim()=='y' ) {
  document.getElementById("answer2").innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById("answer2").innerHTML = wrong;
  console.log(wrong);
}


if (answer3.trim().toUpperCase()== 'NO' || answer3.trim()=='n' ) {
  document.getElementById("answer3").innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById("answer3").innerHTML = wrong;
  console.log(wrong);
}


if (answer4.trim().toUpperCase()== 'NO' || answer4.trim()=='n' ) {
  document.getElementById("answer4").innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById("answer4").innerHTML = wrong;
  console.log(wrong);
}


if (answer5.trim().toUpperCase()== 'YES' || answer5.trim()=='y' ) {
  document.getElementById("answer5").innerHTML = right+" yes of course AHHHHH";
  console.log(right+' I love lobster font');
} else {
  document.getElementById("answer5").innerHTML = wrong;
  console.log(wrong);
}

//Question 6
var notDone=true;
var favNumber=25;
var toohigh= 'Sorry but your number is too high!!! Try again!'
var toolow= 'Sorry but your number is too low!!! Try again!'
var noguesses= 'you are out of guesses! Too badd'


for (var guess = 5; guess > 0 && notDone; guess--) {
answer6;
if (answer6 == favNumber) {
document.getElementById("answer6").innerHTML = right+" yes of course AHHHHH";
alert('congrats! You guessed correctly');
notDone=false;
} else if (answer6>favNumber) {
  alert(toohigh);
  guess-=1;
  prompt('Guess Again!');
  console.log(guess);
} else if (answer6< favNumber){
  alert(toolow);
  guess-=1;
  prompt('Guess Again!');
  console.log(guess);
} else {
  alert('Out of guesses!!');
  document.getElementById("answer5").innerHTML = right+" yes of course AHHHHH";
  console.log(guess);
}
}
