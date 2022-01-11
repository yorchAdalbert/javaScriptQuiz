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
let optionsQuestion4 = new Option('console.log()', 'printf()', 'System.out.println()');
let optionsQuestion5 = new Option('function name(){}', 'const name = () => {}', 'let name = function(){}');
let optionsQuestion6 = new Option('let myArray = [];', 'arry = []', 'int myArray[];');
let optionsQuestion7 = new Option('New York', 'Beijing', 'Mexico');
let optionsQuestion8 = new Option('To have our code organized', 'It does not have relevant', 'To model real world things');
let optionsQuestion9 = new Option('let object = (key: value)', 'let object = {key: value}', 'let object = [key: value]');
let optionsQuestion10 = new Option('_variableName;', 'private int variableName;', 'private: int variableName;');

let optionsQuestions = [optionsQuestion1, optionsQuestion2, optionsQuestion3,
                        optionsQuestion4, optionsQuestion5, optionsQuestion6,
                        optionsQuestion7, optionsQuestion8, optionsQuestion9,
                        optionsQuestion10];