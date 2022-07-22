const Letter = require("./Letter");

class Word extends Letter{
    constructor(randWord) {
        super();
        this.randWord = randWord;
    }

    
    changeToDash() {
        var str = this.randWord.split('');
        for (let i = 0; i < this.randWord.length; i++) {
            if (str[i] == ' ') {
                str[i] = ' ';
            } else {
                str[i] = '_'
            }
            
        }

        return str;
        
        
    }
}

module.exports = Word;
