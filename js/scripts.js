//Initialize  global scoring variables
var cSharpScore = 0;
var phpScore = 0;
var rubyScore = 0;
var javaScore = 0;

var initScore = function(){
 cSharpScore = 0;
 phpScore = 0;
 rubyScore = 0;
 javaScore = 0;

};

var suggestTrack = function(){
  if (cSharpScore >= phpScore){
    if (cSharpScore >= rubyScore){
      if (cSharpScore >= javaScore){
        $("#microsoft").delay(500);
        $("#microsoft").fadeIn();
      }
    }
  }
  else if (phpScore >= javaScore){
    if (phpScore >= rubyScore){
      $("#php").delay(500);
      $("#php").fadeIn();

    }
  }
  else if (rubyScore >= javaScore){
    $("#ruby").delay(500);
    $("#ruby").fadeIn();
  }
  else {
    $("#java").delay(500);
    $("#java").fadeIn();
  };
};
  

var talleyScore = function(response1, response2,response3,response4,response5){
  if (response1 === "agree"){
    javaScore = javaScore + 5;
    cSharpScore = cSharpScore + 5;
  }
  else if (response1 === "disagree"){
    cSharpScore = cSharpScore - 5;
    javaScore = javaScore -3;
  };
  if (response2 === "agree"){
    phpScore = phpScore + 5;
    rubyScore = rubyScore + 3;
    javaScore = javaScore + 3;
  }
  else if (response2 === "disagree"){
    phpScore = phpScore - 3;    
  };
  if (response3 === "agree"){
    phpScore = phpScore + 5;
    rubyScore = rubyScore - 3;
    cSharpScore = cSharpScore -3;
    javaScore = javaScore -3;
  }
  else if (response3 === "disagree"){
    phpScore = phpScore - 3;
    rubyScore = rubyScore + 3;
    cSharpScore = cSharpScore + 3;
    javaScore = javaScore + 3;
  };
  if (response4 === "agree"){
    rubyScore = rubyScore + 5;
    phpScore = phpScore - 2;
    cSharpScore = cSharpScore - 2;
    javaScore = javaScore - 2;
  }
  else if (response4 === "disagree"){
    rubyScore = rubyScore - 5;
    phpScore = phpScore +2;
    cSharpScore = cSharpScore + 2
    javaScore = javaScore + 2;
  };
  if (response5 === "agree"){
    rubyScore = rubyScore + 5;
    phpScore = phpScore +5;
    cSharpScore = cSharpScore - 100;
    javaScore = javaScore + 5;    
  }
  else if (response5 === "disagree"){
    rubyScore = rubyScore - 2;
    phpScore = phpScore - 2;
    cSharpScore = cSharpScore + 5;
    javaScore = javaScore - 2;
  };
}

$(document).ready(function(){
  //When button clicked initialize answer variables
  $("#submit").click(function(){
    var answer1 = $("input:radio[name=answer1]:checked").val();
    var answer2 = $("input:radio[name=answer2]:checked").val();
    var answer3 = $("input:radio[name=answer3]:checked").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("input:radio[name=answer5]:checked").val();
    //Hide last question
    $("#instructions").fadeOut(500);
    $("#question5").fadeOut();
    //Set score variables to zero
    initScore();
    //Talley scores
    talleyScore(answer1,answer2,answer3,answer4,answer5);
    suggestTrack();
  });
  $("#begin").click(function(){
    $("#greeting").fadeOut();
    $("#instructions").delay(500);
    $("#instructions").fadeIn();
    $("#question1").delay(500);
    $("#question1").fadeIn();
  });
// Code for Next buttons
  $("#advance1").click(function(){
    event.preventDefault();
    $("#question1").fadeOut();
    $("#question2").delay(500);
    $("#question2").fadeIn();
  });
    $("#advance2").click(function(){
    event.preventDefault();
    $("#question2").fadeOut();
    $("#question3").delay(500);
    $("#question3").fadeIn();
  });
  $("#advance3").click(function(){
    event.preventDefault();
    $("#question3").fadeOut();
    $("#question4").delay(500);
    $("#question4").fadeIn();
  });
  $("#advance4").click(function(){
    event.preventDefault();
    $("#question4").fadeOut();
    $("#question5").delay(500);
    $("#question5").fadeIn();
  });
});