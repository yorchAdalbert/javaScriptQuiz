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
let optionsQuestion2 = new Option(1, '$', 'var', 'int');

let questions = [question1, question2, question3];
let optionsQuestions = [optionsQuestion1, optionsQuestion2]; 

let questionSection = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let buttonNext = document.getElementById('next');
let iteration = 0;

questionSection.innerHTML = questions[iteration].content;

option1.innerHTML = optionsQuestions[iteration].option1;
option2.innerHTML = optionsQuestions[iteration].option2;
option3.innerHTML = optionsQuestions[iteration].option3;


function nextQuestion() {
    iteration++;
    questionSection.innerHTML = questions[iteration].content;
    option1.innerHTML = optionsQuestions[iteration].option1;
    option2.innerHTML = optionsQuestions[iteration].option2;
    option3.innerHTML = optionsQuestions[iteration].option3;
}

buttonNext.addEventListener('click', nextQuestion);
