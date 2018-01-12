var word = require("./word.js")

function randomWord () {
        var splitWord = word[Math.floor(Math.random() * word.length)].split('');
        console.log(splitWord)
       
    };

randomWord();

module.exports = randomWord;