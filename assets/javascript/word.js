let letter = require("./letter");
let fs = require("fs");

let words = fs.readFileSync("../data/words.txt", "utf8").split("\r\n")

function Word() {
    this.word = words[Math.floor((Math.random() * words.length))];
    this.wordDisplay = []
    this.letterArray = []
    this.guessesLeft = 10
    for (let i = 0; i < this.word.length; i++) {
        let letterNew = new letter.Letter()
        letterNew.char = this.word[i] + " "
        if (letterNew.char === "  ") { letterNew.isGuessed = true }
        this.letterArray.push(letterNew)
    }
    this.printWord = function (letter) {
        this.wordDisplay = [];
        let isGuessed = false;
        for (let i = 0; i < this.letterArray.length; i++) {
            if(this.letterArray[i].guess(letter)) {
                isGuessed = true;
            }
            this.wordDisplay.push(this.letterArray[i].getChar())
        }
        if(isGuessed) {
            console.log("Correct!")
        }
        else {
            if(!this.chkForAnyLetters() && letter === " ") {
                console.log("New Word")
            }
            else {
                this.guessesLeft--
                console.log("Incorrect!")
                console.log(`${this.guessesLeft} guesses left!`)
            }            
        }
        return this.wordDisplay.join("")
    }
    this.chkForIsGuessed = function() {
        let isThereAnyUnGuessed = false;
        for (let i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].isGuessed === false) {
                isThereAnyUnGuessed = true;
            }
        }
        return isThereAnyUnGuessed
    }
    this.chkForAnyLetters = function() {
        let isThereALetter = false;
        for (let i = 0; i < this.wordDisplay.length; i++) {
            switch(this.wordDisplay[i]) {
                case "_ " :
                break;
                case " " :
                break;
                case "  " :
                break;
                default :
                isThereALetter = true
                break;
            }
        }
        return isThereALetter
    }
}

module.exports.Word = Word
