var letters = require('./letters.js')

var inquirer = require('inquirer');


function game() {
    var start = this;



    inquirer.prompt([{
        name: 'start',
        input: 'input',
        message: "Input any key to begin Hangman.."
    }]).then(function (response) {
        if (response.start) {
            letters.randomWord();
        }
    });

};
game();