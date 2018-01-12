var letters = require('./letters.js');

var inquirer = require('inquirer');


var userGuess = [''];

// var wahev = letters.splitLetters;
// console.log(wahev);
function game() {

    inquirer.prompt([{
        name: 'start',
        input: 'input',
        message: "Begin hangman"
    }]).then(function (response) {
        if (response) {
             randomWord();
             console.log(randomWord);
            // userInput();
        };
    });

};
game();