var questions = [
  ["Welche Stadt ist am nähesten an Paris?", "Antwerpen"],
  [“In welches Meer fließt der Nil?", “Das Mittelmeer"],
  [“Was ist die Hauptstadt von Island?", “Reykjavik"],
  ["Welches ist der größte Inselstaat der Welt mit mehr als siebzehntausend Inseln?", "Indonesien"],
  ["Was ist die Hauptstadt von Venezuela?", "Caracas"]
];

var correctAnswer = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}

for(i=0;i<questions.lenght; i++) {
  question = questions [i][0];
  answer = questions [i][1];
  response = parseInt(prompt(question));
  if(response ===answer) {
    correctAnswer+=1;
  }
}

html = “Du hast" + correctAnswers + “Punkt(e).";
print(html);
