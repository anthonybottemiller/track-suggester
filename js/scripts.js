$(document).ready(function(){
  //When form is submitted score survey
  $("button#submit").click(function(){
    var answer1 = $("input:radio[name=answer1]:checked").val();
    var answer2 = $("input:radio[name=answer2]:checked").val();
    var answer3 = $("input:radio[name=answer3]:checked").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("input:radio[name=answer5]:checked").val();
    //Initialize scoring variables
    var cSharpScore = 0;
    var phpScore = 0;
    var rubyScore = 0;
    var javaScore = 0;


  });
});