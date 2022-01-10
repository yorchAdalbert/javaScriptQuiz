class Question {
    constructor(id, content, value) {
        this.id = id;
        this.content = content;
        this.value = value;
    }
}

class Option {
    constructor(id, option1, option2, option3) {
        this.id = id;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
}

let question1 = new Question(1, 'What is javaScript?', 'a');
let question2 = new Question(2, 'How to declare a variable?', 'b');
let question3 = new Question(3, 'What is a function', 'c');

let optionsQuestion1 = new Option(1, 'A programming language', 'A software', 'A web page');
let optionsQuestion2 = new Option(2, '$', 'var', 'int');
let optionsQuestion3 = new Option(3, 'Something', 'nothing', 'A block of code');

let questions = [question1, question2, question3];
let optionsQuestions = [optionsQuestion1, optionsQuestion2, optionsQuestion3]; 

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


function nextQuestion(e) {
    let answer = e.target.id;
    getAnswer(answer);

    if (i < questions.length - 1) {
        i++;
        question.innerHTML = questions[i].content;
        option1.innerHTML = optionsQuestions[i].option1;
        option2.innerHTML = optionsQuestions[i].option2;
        option3.innerHTML = optionsQuestions[i].option3;
    } else {
        questionSection.removeChild(option1);
        questionSection.removeChild(option2);
        questionSection.removeChild(option3);
        question.innerHTML = 'Asertastes: ' + correctAnswers + ' preguntas.';
    }
}

function getAnswer(answer) {
    console.log(answer);
    if (answer == questions[i].value)
        correctAnswers++;
    console.log(correctAnswers);
}

option1.addEventListener('click', nextQuestion);
option2.addEventListener('click', nextQuestion);
option3.addEventListener('click', nextQuestion);
