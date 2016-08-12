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

}

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
    cSharpScore = cSharpScore - 2
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
    cSharpScore = cSharpScore + 5
    javaScore = javaScore - 2;
  }

};

$(document).ready(function(){
  //When button clicked initialize answer variables
  $("button#submit").click(function(){
    console.log("button pressed")
    var answer1 = $("input:radio[name=answer1]:checked").val();
    console.log(answer1);
    var answer2 = $("input:radio[name=answer2]:checked").val();
    var answer3 = $("input:radio[name=answer3]:checked").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("input:radio[name=answer5]:checked").val();
    //Set score variables to zero
    initScore();
    //Talley scores
    talleyScore(answer1,answer2,answer3,answer4,answer5);
    console.log(cSharpScore);
    console.log(phpScore);
    console.log(rubyScore);
    console.log(javaScore);

  });
});