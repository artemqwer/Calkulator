let currentInput = '';
let previousInput = '';
let operator = '';

function addNumber(number) {
    currentInput += number;
    console.log('Додано число', number);
    console.log('Поточний ввід:', currentInput);
    updateDisplay();

}
function setOperator(op) {
if (currentInput === '') return;
if (previousInput !== '') {
    calculate();
}
operator = op;
previousInput = currentInput;
currentInput = '';
console.log('Оператор встановлено:', operator);
console.log('Попередній ввід:', previousInput);
}
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break; 
        case '*':
            result = num1 * num2;
            break;  
        case '/':
          if (num2 === 0) {
            alert("Ділити на нуль не можна!");
            clearDisplay();
            return;
        }
        result = num1 / num2;
        break;
        default:
            return;
    }
    
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
    console.log('Результат:', result);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
    console.log('Екран очищено');       
}
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;

}

