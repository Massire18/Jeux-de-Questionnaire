var questionnaire = {
   chat : "questionnaireChat.json",
   chien : "questionnaireChien.json",

   afficherQuestionnaire : function(){
       var txt = "";
       for(var propriete in this){
           if( typeof(this[propriete]) !== "function"){
               txt += propriete + " - ";
           }    
       }
       console.log(txt);
   }
}
questionnaire.afficherQuestionnaire();
module.exports = questionnaire;