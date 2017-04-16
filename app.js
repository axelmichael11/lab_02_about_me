'use strict';

var name =prompt('Welcome! I want to ask you some questions to see how well you know me! But First, what is your name???');
var correct = 0;
console.log('suh dude');
var question1 = 'do you think i like basketball?';
var question2 = 'do you think soccer is my favorite sport??';
var question3 = 'do you think thai food is my favorite food??';
var question4 = 'do you think my favorite color is blue??';
var question5 = 'do you think I like writing JS?!???!?';
var question6 = 'SOOO what do you think is my favorite number?!?';
var question7 = 'What states have I been to??';
var right= 'you are right!!!!';
var wrong= 'you are wrong....';

var answer1 = prompt(question1);
var answer2 = prompt(question2);
var answer3 = prompt(question3);
var answer4 = prompt(question4);
var answer5 = prompt(question5);



document.getElementById('question1').innerHTML = question1;
document.getElementById('question2').innerHTML = question2;
document.getElementById('question3').innerHTML = question3;
document.getElementById('question4').innerHTML = question4;
document.getElementById('question5').innerHTML = question5;
document.getElementById('question6').innerHTML = question6;

document.getElementById('question7').innerHTML = question7;

if (answer1.trim().toUpperCase()   == 'YES' || answer1.trim() =='y' ) {
  document.getElementById('answer1').innerHTML = right;
  console.log(right+' I love lobster font');
  correct++;
} else {
  document.getElementById('answer1').innerHTML = wrong;
  console.log(wrong);
}


if (answer2.trim().toUpperCase() == 'YES' || answer2.trim() == 'y' ) {
  document.getElementById('answer2').innerHTML = right;
  console.log(right+' I love lobster font');
  correct++;

} else {
  document.getElementById('answer2').innerHTML = wrong;
  console.log(wrong);
}


if (answer3.trim().toUpperCase() == 'NO' || answer3.trim() == 'n' ) {
  document.getElementById('answer3').innerHTML = right;
  console.log(right+' I love lobster font');
  correct++;
} else {
  document.getElementById('answer3').innerHTML = wrong;
  console.log(wrong);
}


if (answer4.trim().toUpperCase() == 'NO' || answer4.trim() == 'n' ) {
  document.getElementById('answer4').innerHTML = right;
  console.log(right+' I love lobster font');
  correct++;
} else {
  document.getElementById('answer4').innerHTML = wrong;
  console.log(wrong);
}


if (answer5.trim().toUpperCase() == 'YES' || answer5.trim() == 'y' ) {
  document.getElementById('answer5').innerHTML = right + ' yes of course AHHHHH';
  console.log(right + ' I love lobster font');
  correct++;
} else {
  document.getElementById('answer5').innerHTML = wrong;
  console.log(wrong);
}


//Question 6

alert('SOOO what do you think is my favorite number?!? I will give you four tries to get the right answer!!!!');


var notDone = true;
var favNumber = 25;

//this will ask the question outside the loop... only alerting inside the if situations...
for (var i = 4; i > 0 && notDone; i--) {
  var answer6 = prompt('What is my favorite number?');
  console.log(i);
  if (answer6 == favNumber) {
    document.getElementById('answer6').innerHTML = right + ' yes of course AHHHHH';
    alert('congrats! You guessed correctly');
    notDone=false;
    correct++;
  } else if (answer6 > favNumber || i == 1) {
    alert('Too High!!!!!!');
    document.getElementById('answer6').innerHTML = wrong;
  } else if (answer6 < favNumber || i == 1) {
    alert('Too Low!!!!!!!!');
    document.getElementById('answer6').innerHTML = wrong;
  }
}

//Question 7

var states= ['Oregon','Idaho','California','Hawaii','South Carolina','CA','OR','ID','HI','SC'];

alert('Last series of questions! I will give you seven attempts to get this question right! The question is, which states have I been to in the United States?!??!?');

var notFinished = true;

for (var I = 7; I > 0 && notFinished; I--) {
  var answer7 = prompt(question7);
  for (var j = 0; j < states.length; j++) {
    if (answer7.trim().toUpperCase() === states[j].trim().toUpperCase()) {
      alert('yeah you got it! These were the possible answers... '+states);
      notFinished=false;
      correct++;
      document.getElementById('answer7').innerHTML = right + ' yes of course AHHHHH';
    }
  }
  if (notFinished) {
    alert('nope! Guess again...');
  } else if (I === 1) {
    alert('You are out of guesses! These were the possible answers... '+states);
    document.getElementById('answer7').innerHTML = wrong;
  }
}
console.log(correct);

if (correct < 3) {
  document.getElementById('finalscore').innerHTML =name+ ', You got '+correct+' out of 7 questions correct!'+' You really don\'t know me at all!';
} else if (correct <= 5 && correct >= 3) {
  document.getElementById('finalscore').innerHTML =name+ ', You got '+correct+' out of 7 questions correct!'+' You kind of know me...';
} else if (correct > 5) {
  document.getElementById('finalscore').innerHTML =name+ ', You got '+correct+' out of 7 questions correct!'+' You know me pretty well!';
}
