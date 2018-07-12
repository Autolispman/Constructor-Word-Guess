let inquirer = require("inquirer")
let word = require("./word")
let newWord = new word.Word;
console.log(newWord.printWord(" "))
console.log("")

function showWord() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess letter",
            name: "letter"
        }
    ]).then(answers => {        
        console.log(newWord.printWord(answers.letter + " "))
        console.log(" ")
        if(!newWord.chkForIsGuessed()) {
            newWord = new word.Word
            console.log(newWord.printWord(" "))
            console.log(" ")
        }
        if(newWord.guessesLeft <= 0) {
            newWord = new word.Word
            console.log(newWord.printWord(" "))
        }
        showWord();
    });
}

showWord();

