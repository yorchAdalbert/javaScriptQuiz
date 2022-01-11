class Question {
    constructor(content, value) {
        this.content = content;
        this.value = value;
    }
}

let question1 = new Question('What is javaScript?', 'a');
let question2 = new Question('How to declare a variable?', 'b');
let question3 = new Question('What is a function', 'c');
let question4 = new Question('Which method allow you to print in console?', 'a');
let question5 = new Question('How to declare an arrow function?', 'b');
let question6 = new Question('How to declare an array?', 'a');
let question7 = new Question("const cities = ['New York', 'Beijing', 'Mexico']\nWhat is the output of cities[2]?", 'c');
let question8 = new Question('What is the usage of objects in javaScript?', 'c');
let question9 = new Question('What is the syntax of an object literal?', 'b');
let question10 = new Question('How to declare a private variable in JavaScript?', 'a');

let questions = [question1, question2, question3, question4,
                 question5, question6, question7, question8,
                 question9, question10];