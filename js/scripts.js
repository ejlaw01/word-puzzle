//business logic
var i=0;
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var replaceVowels = function(input) {
  var secretSentence = [];
  for (i=0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      secretSentence.push("-");  //alternately secretSentence.push(input[i] = "-");
    } else {
      secretSentence.push(input[i]);
    }
  }
  var joinedSecretSentence = secretSentence.join("");
  return joinedSecretSentence;
}

//user-interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val().split("");
    var newSentence = replaceVowels(userInput);
    $("#output").text(newSentence);
    $("input").val("");
  });
});
