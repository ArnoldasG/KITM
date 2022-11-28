'use strict'


// SIMPLE FUNCTION

let fName = "Marmadukas";

function helloWorld(name) {
    console.log(`Welcome back Mr. ${name}`);
}

helloWorld(fName);


// PERSONAL FUNCTION - FUNCTION EXPRESSION

let firstName = "Arnoldas.";

let myName = function(name) {
    console.log(`Hello Mr. ${name}`);
}

console.log(myName(firstName));




let price = 7.20;
let quantity = 6;

function calculation(amount, price) {
    let sum = amount * price;
    return sum;
}


console.log(calculation(quantity, price));


// Yearly salary calculation

function yearlySalary(worker, salary) {
    let sum = salary * 12
    console.log (`Worker - ${worker} - yearly salary is: ${sum}`);

}

yearlySalary("Arnoldas", 3600);


// EXERCISE CALCULATOR


function sum(numberOne, numberTwo, operator){
    
    let result;

    if (operator == "+") {
        result = numberOne + numberTwo
    } else if (operator == "-") {
            result = numberOne - numberTwo
    } else if (operator == "*") {
        result = numberOne * numberTwo
    } else { 
        result = numberOne / numberTwo
    }

    console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`)
}

sum(5, 15, "*")


function switchSum (firstNumber, secondNumber, operators) {
    let result;
switch (operators) {
    case "+": 
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstName / secondNumber;
    default:
        console.log ("You forgot to enter an operator");
        break;
    }

    console.log(`${firstNumber} ${operators} ${secondNumber} = ${result}`)

}

switchSum(10, 10, "+");