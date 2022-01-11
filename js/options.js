class Option {
    constructor(option1, option2, option3) {
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
}

let optionsQuestion1 = new Option('A programming language', 'A software', 'A web page');
let optionsQuestion2 = new Option('$', 'var', 'int');
let optionsQuestion3 = new Option('Something', 'nothing', 'A block of code');

let optionsQuestions = [optionsQuestion1, 
                        optionsQuestion2, 
                        optionsQuestion3];