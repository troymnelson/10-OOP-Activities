class Letter {

  

  checkGuess(guess, word) {
    var guessCorrect = false;
    var str = [...word];
    for (let i = 0; i < word.length; i++) {
        if (guess == str[i]) {
            guessCorrect = true;
            return guessCorrect;
        } 
    }
    return guessCorrect;
  }
}

module.exports = Letter;
