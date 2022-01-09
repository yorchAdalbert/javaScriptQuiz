class Question {
    constructor(id, content, value) {
        this.id = id;
        this.content = content;
        this.value = value;
    }
}

let question1 = new Question(1, 'What is javaScript?', 'a');
let question2 = new Question(2, 'How to declare a variable?', 'b');
let question3 = new Question(3, 'What is a function', 'c');

let questions = [question1, question2, question3];

let questionSection = document.getElementById('question');

let paragraph = document.createElement('p');
paragraph.innerHTML = question1.content;
questionSection.appendChild(paragraph);

console.log(questions);
