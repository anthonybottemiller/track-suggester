$(document).ready(function(){
//Initialize scoring variables
  var cSharpScore = 0;
  var phpScore = 0;
  var rubyScore = 0;
  var javaScore = 0;
  //When form is submitted score survey
  $("button#submit").click(function(){
    var answer1 = $("input:radio[name=answer1]:checked").val();
    console.log(answer1)
    var answer2 = $("input:radio[name=answer2]:checked").val();
    console.log(answer2)
    var answer3 = $("input:radio[name=answer3]:checked").val();
    console.log(answer3)
    var answer4 = $("input:radio[name=answer4]:checked").val();
    console.log(answer4)
    var answer5 = $("input:radio[name=answer5]:checked").val();
    console.log(answer5)

  });
});