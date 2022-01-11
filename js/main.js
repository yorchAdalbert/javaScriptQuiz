let questionSection = document.getElementById('questionSection');
let question = document.getElementById('question');
let option1 = document.getElementById('a');
let option2 = document.getElementById('b');
let option3 = document.getElementById('c');
let i = 0;
let correctAnswers = 0;

question.innerHTML = questions[i].content;

option1.innerHTML = optionsQuestions[i].option1;
option2.innerHTML = optionsQuestions[i].option2;
option3.innerHTML = optionsQuestions[i].option3;

option1.addEventListener('click', nextQuestion);
option2.addEventListener('click', nextQuestion);
option3.addEventListener('click', nextQuestion);