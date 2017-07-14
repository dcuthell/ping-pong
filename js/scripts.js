function ppFunction(userInput){
  var output = "";
  var count = 0;
  if(isNaN(userInput)){
    alert("Please enter in a valid number");
    return output;
  }
  count = parseInt(userInput);
  debugger;
  for(var i = 0; i <= count; i++){
    output += "<li>" + i + "</li>";
  }
  debugger;
  return output;
}


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    var input = $("input#inputNum").val();
    var output = ppFunction(input);
    $("#outputList").html(output);
    event.preventDefault();
  });
});
