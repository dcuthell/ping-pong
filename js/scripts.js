function ppFunction(userInput){
  var output = "";
  var count = 0;
  if(isNaN(userInput)){
    alert("Please enter in a valid number");
    return output;
  }
  count = parseInt(userInput);
  for(var i = 0; i <= count; i++){
    output += i + " ";
  }
  return output;
}


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    var input = $("input#inputNum").val();
    var output = ppFunction(input);
    $("#outputLine").text(output);
    event.preventDefault();
  });
});
