var boiteOutil = require("./boiteOutil");
var gestionQuestionnaire = require("./gestionQuestionnaire");
console.log(gestionQuestionnaire);
var questionnaire = selectionQuestionnaire();
var gestionQuestion = require("./gestionQuestion");
var joueur = require("./joueur");

var isGameOver = false;

var nomDuJoueur = boiteOutil.saisirUneChaine("Quel est votre nom ?");
joueur.initialiserJoueur(nomDuJoueur);
joueur.afficherJoueur();

while(!isGameOver){
    var question = gestionQuestion.genererQuestionAleatoire(questionnaire);
    gestionQuestion.afficherUneQuestion(question);
    var reponse = gestionQuestion.saisirReponse();
    var isBonneReponse = gestionQuestion.estBonneReponse(question,reponse);
    if(isBonneReponse){
        var point = gestionQuestion.retourneNombrePoint(question);
        joueur.gagnerPoint(point);
        joueur.afficherJoueur();
        console.log("C'est une bonne réponse");
        if(gestionQuestion.verifierQuestionnaireVide(questionnaire)){
            isGameOver = true;
            console.log("Vous avez gagné");
        }
    }else{
       console.log("C'est une mauvaise reponse - Vous avez perdu -votre score finale est de :" + joueur.score);
       isGameOver = true;
    }
}
joueur.sauvegardeJoueur();

function selectionQuestionnaire(){
    gestionQuestionnaire.afficherQuestionnaire();
    var choixQuestionnaire = boiteOutil.saisirUneChaine("Quel est votre choix ?");

     return require("./questionnaires/" + gestionQuestionnaire[choixQuestionnaire]);   
}



