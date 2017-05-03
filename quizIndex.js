function functionSubmit() {
  const question1 = document.quiz.question1.value;
  const question2 = document.quiz.question2.value;
  const question3 = document.quiz.question3.value;
let correct = 0;

    if (question1 === "Antwerpen") {
      correct++;
      }
    if (question2 === "Mediterranean Sea") {
      correct ++;
      }
    if (question3 === "90%") {
      correct++;
      }
  document.getElementById("submitted").style.visibility = "visible";
  document.getElementById("correctNumber").innerHTML = "You have " + correct + " correct answers. ";

 }
