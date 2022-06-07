const readline = require('readline-sync');

const printWelcomeMessage = () => {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

const getStringInputWithPrompt = prompt => {
    console.log('\n' + prompt);
    return readline.prompt();
}

const getNumberInputWithPrompt = prompt => {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
    } while (isNaN(response));
    return response;
}

const getOperator = () => {
    return getStringInputWithPrompt('Please enter the operator:');
}

const getNumberArray = operator => {
    const iterations = getNumberInputWithPrompt(`How many numbers do you want to ${operator}?`);
    let numbers = new Array(iterations);
    for (let i = 0; i < iterations; i++) {
        numbers[i] = getNumberInputWithPrompt(`Please enter number ${i + 1}:`);
    }
    return numbers;
}

const calculateAnswer = (operator, numbers) => {
    let answer = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (operator === '+') {
            answer += numbers[i];
        } else if (operator === '-') {
            answer -= numbers[i];
        } else if (operator === '*') {
            answer *= numbers[i];
        } else if (operator === '/') {
            answer /= numbers[i];
        }
    }
    return answer;
}

const performOneCalculation = () => {
    const operator = getOperator();
    const numbers = getNumberArray(operator);
    const answer = calculateAnswer(operator, numbers);
    console.log(`The answer is: ${answer}`);
}

printWelcomeMessage();
while (true) {
    performOneCalculation();
}
