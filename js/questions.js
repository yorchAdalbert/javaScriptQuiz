class Question {
    constructor(content, value) {
        this.content = content;
        this.value = value;
    }
}

let question1 = new Question('What is javaScript?', 'a');
let question2 = new Question('How to declare a variable?', 'b');
let question3 = new Question('What is a function', 'c');

let questions = [question1, question2, question3];