var readline = require("readline-sync");

var boiteOutil = {
    saisirUneChaine : function(question){
        return readline.question(question);
    },

    genererChiffreAleatoire(min, max){
        return Math.floor(Math.random()* (max-min) + min);
    }
}

module.exports = boiteOutil;