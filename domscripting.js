// GOAL: TO LEARN DOMSCRIPTING
var name = prompt("what's your name?", "type your name here");

var number = (Math.floor(Math.random()* (100 + 1)));
  console.log(number);

var counter = 0;


function answer() {
var guess = document.getElementById("inputField").value;
  if (counter <= 7){
    if (guess > number) {
      document.getElementById("answer").innerHTML = "Keep trying, your guess is too high";
    } else if (guess < number) {
      document.getElementById("answer").innerHTML = "Keep trying, your guess is too low";
    } else if (isNaN(guess)){
      document.getElementById("answer").innerHTML = "Uh oh, that's not a number, you should enter a number";
    } else if (guess == number) {
      document.getElementById("answer").innerHTML = name + ", you won!!";
    }
  } else {
      document.getElementById("answer").innerHTML = "You lose :(";
  }
  counter++;
  console.log(counter);
}
