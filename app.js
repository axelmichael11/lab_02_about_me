'use strict';

var correct = 0;
/*
var correct= 0;
console.log('suh dude');
var question1 = 'do you think i like basketball?';
var question2 = 'do you think soccer is my favorite sport??';
var question3= 'do you think thai food is my favorite food??';
var question4= 'do you think my favorite color is blue??';
var question5= 'do you think I like writing JS?!???!?';
var question6= 'SOOO what do you think is my favorite number?!?';

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


if (answer1.trim().toUpperCase()   == 'YES' || answer1.trim() =='y' ) {
  document.getElementById('answer1').innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById('answer1').innerHTML = wrong;
  console.log(wrong);
}


if (answer2.trim().toUpperCase() == 'YES' || answer2.trim() == 'y' ) {
  document.getElementById('answer2').innerHTML = right;
  console.log(right+' I love lobster font');

} else {
  document.getElementById('answer2').innerHTML = wrong;
  console.log(wrong);
}


if (answer3.trim().toUpperCase() == 'NO' || answer3.trim() == 'n' ) {
  document.getElementById('answer3').innerHTML = right;
  console.log(right+' I love lobster font');

} else {
  document.getElementById('answer3').innerHTML = wrong;
  console.log(wrong);
}


if (answer4.trim().toUpperCase() == 'NO' || answer4.trim() == 'n' ) {
  document.getElementById('answer4').innerHTML = right;
  console.log(right+' I love lobster font');
} else {
  document.getElementById('answer4').innerHTML = wrong;
  console.log(wrong);
}


if (answer5.trim().toUpperCase() == 'YES' || answer5.trim() == 'y' ) {
  document.getElementById('answer5').innerHTML = right + ' yes of course AHHHHH';
  console.log(right + ' I love lobster font');
} else {
  document.getElementById('answer5').innerHTML = wrong;
  console.log(wrong);
}
*/

//Question 6
/*
alert('SOOO what do you think is my favorite number?!? I will give you four tries to get the right answer!!!!');

var right= 'you are right!!!!';
var wrong= 'you are wrong....';

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
    correct +=1;
  } else if (answer6 > favNumber || i == 1) {
    alert('Too High!!!!!!');
    document.getElementById('answer6').innerHTML = wrong;
  } else if (answer6 < favNumber || i == 1) {
    alert('Too Low!!!!!!!!');
    document.getElementById('answer6').innerHTML = wrong;
  }
}
*/
//Question 7

var states= ['Washington','Oregon','Idaho','California','Hawaii','South Carolina','WA','CA','OR','ID','HI','SC'];

alert('Last series of questions! I will give you seven attempts to get one question right! The question is, which states have I been to in the United States?!??!?');

var notFinished = true;


for (var i = 7; i > 0 && notFinished; i--) {
  console.log('i'+i);
  for (var j=0; j<states.length; j++) {
    var question7 = prompt('Which State??!!?');
    if (question7.trim().toUpperCase() === states[j].trim().toUpperCase()) { //how to switch up all the strings so they are equal.... with lower/upper case...
      console.log('i in if'+i);
      console.log('j in if'+j);
      correct++;
      alert('yay your right!');
      console.log(j);
      notFinished=false;
      console.log(notFinished);
    } else {
      alert('sorry thats not right...');
      console.log('j'+j);
    }
  }
}
//
// document.getElementById("question7").innerHTML='Last series of questions! I will give you seven attempts to answer! The question is, which states have I been to in the United States?!??!?';
//
// document.getElementById("answer7").innerHTML="You got  "+correctstate+" out of seven attempts! Not too bad";
//
//
//
// //
// // var answer6= prompt('Last Question! Which States have I been to in the United States?');
// // var rightanswers= [];
// //
// // for (var i= 0; i<states.length; i++) {
// //   if (answer6===states[i] && correct) {
// //     rightanswers.push(states[i])
// //   }
