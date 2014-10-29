
var Hangman = {};

Hangman.firebase = new Firebase("https://boiling-inferno-1978.firebaseio.com/hangman");

Hangman.word = 'hangman';
//hangman.word.length
Hangman.result = [ '_', '_', '_', '_', '_', '_', '_' ];

Hangman.numGuesses = 7

Hangman.validateGuess = function(letterGuess) {
  for (i=0, len = Hangman.word.length; i < len; i++) {
    if (Hangman.word.charAt(i) === letterGuess) {
      Hangman.result[i] = letterGuess;
    } else {
      Hangman.numGuesses += 1;
    }
  };
  return Hangman.result;
};



$(document).ready(function () {
  $('#letter-guess').keypress(function (event) {

    if (event.keyCode == 13) {
      var letterGuess = $('#letter-guess').val();
      console.log(Hangman.validateGuess(letterGuess));

    };
  });

});












