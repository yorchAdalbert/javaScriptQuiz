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