function calculator(num1, operator, num2) {
    if (operator === '+') {
        return num1 + num2;
    } 
    else if (operator === '-') {
        return num1 - num2;
    } 
    else if (operator === '*') {
        return num1 * num2;
    } 
    else if (operator === '/') {
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero!';
    } 
    else {
        return 'Invalid operator';
    }
}
const num1 = 5;
const num2 = 3;
const operator = '-';
const result = calculator(num1, operator, num2);
console.log(`Result: ${result}`); // Output: Result: 8
