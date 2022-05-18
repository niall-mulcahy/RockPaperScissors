const gameArray = ["rock", "paper", "scissors"];
var answerArray = [];
var computerAnswers = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var rock = $("#rock");
var paper = $("#paper");
var scissors = $("#scissors");

var answerClick = function(e){
  $('#display-input').html(`You have selected ${e.currentTarget.id}`);
  answerArray.push(e.currentTarget.id);
  console.log(answerArray);
}

$('#shoot-button').on("click", function() {
  var playerAnswer = answerArray.at(-1);
  var computerAnswer = computerAnswers[0];

  $('#exampleModal').modal('hide');
  $('#player-answers').append(`<img src='${playerAnswer}.jpg' class='mx-auto answerImages'></img>`);
  $('#player-answers').append(`<strong><h2 class='mt-2 answer-info'>${playerAnswer}</h2></strong>`);
  $('#computer-answers').append(`<img src='${computerAnswer}.jpg' class='mx-auto answerImages'></img>`);
  $('#computer-answers').append(`<strong><h2 class='mt-2 answer-info'>${computerAnswer}</h2></strong>`);
  $('#display-input').html("");


  if (playerAnswer == computerAnswer) {
    alert("Draw! Play Again!")
  }
  if (playerAnswer == 'rock' && computerAnswer == 'paper'){
    alert(`You Lose! Paper Smothers Rock`);
  } else if (playerAnswer == 'paper' && computerAnswer == 'rock'){
    alert(`You Win! Paper Smothers Rock!`);
  } else if (playerAnswer == 'rock' && computerAnswer == 'scissors'){
    alert(`You Win! Rock Smashes Scissors`);
  } else if (playerAnswer == 'paper' && computerAnswer == 'scissors'){
    alert(`You Lose! Scissors Cuts Paper`);
  } else if (playerAnswer == 'scissors' && computerAnswer == 'rock'){
    alert(`You Lose! Rock Smashes Scissors!`);
  } else if (playerAnswer == 'scissors' && computerAnswer == 'paper') {
    alert(`You Win! Scissors Cuts Paper!`);
  }
})

rock.on('click', answerClick);
paper.on('click', answerClick);
scissors.on('click', answerClick);


$( "#startGame" ).on( "click", function() {
  const images = document.querySelectorAll('.answerImages');
  const answerInfos = document.querySelectorAll('.answer-info');

  images.forEach(image => {
    image.remove();
  });
  answerInfos.forEach(text => {
    text.remove();
  });
  answerArray = [];


  var gameArrayIndex = getRandomInt(gameArray.length);
  computerAnswers.push(gameArray[gameArrayIndex]);
  console.log(computerAnswers);
});