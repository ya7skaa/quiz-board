//Business logic
$(document).ready(function(){
  $("button#find").click(function quizMarks(event){
    var marks = 0;
    $("input:radio[name=definition1]:checked,input:radio[name=definition2]:checked,input:radio[name=definition3]:checked,input:radio[name=definition4]:checked").each(function() {
      update = marks += parseInt($(this).val());
      percentage = (update/50)*100;
    });






    //Output to User interface
   document.getElementById("total").innerHTML = " YOUR SCORE IS: " + percentage + "%";

 });
});
