function ppFunction(userInput){
  var output = "";
  var count = 0;
  if(isNaN(userInput)){
    alert("Please enter in a valid number");
    return output;
  }
  count = parseInt(userInput);
  for(var i = 1; i <= count; i++){
    if(i%15 === 0){
      output += "<li>ping-pong</li>";
    }else if(i%5 === 0){
      output += "<li>pong</li>";
    }else if(i%3 === 0){
      output += "<li>ping</li>";
    }else{
      output += "<li>" + i + "</li>";
    }

  }
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
