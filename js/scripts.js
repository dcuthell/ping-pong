//Business Logic
function pingPongFunction(userInput){
  var output = [];
  var count = 0;
  if(isNaN(userInput)){
    alert("Please enter in a valid number");
    return output;
  }
  count = parseInt(userInput);
  for(var i = 1; i <= count; i++){
    if(i%15 === 0){
      output.push("ping-pong");
    }else if(i%5 === 0){
      output.push("pong");
    }else if(i%3 === 0){
      output.push("ping");
    }else{
      output.push(i);
    }
  }
  return output;
}

//UI
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    var input = $("input#inputNum").val();
    var outputArray = pingPongFunction(input);
    var output = "";
    for(i=0; i < outputArray.length; i++){
      output += "<li>" + outputArray[i] + "</li>";
    }
    $("#outputList").html(output);
    event.preventDefault();
  });
  $("#pongPing").click(function(){
    var input = $("input#inputNum").val();
    var outputArray = pingPongFunction(input);
    var output = "";
    for(i=(outputArray.length-1); i >= 0 ; i--){
      output += "<li>" + outputArray[i] + "</li>";
    }
    $("#outputList").html(output);
  });
});
