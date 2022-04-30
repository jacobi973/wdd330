function numbers(){
let firstNumber = parseInt(document.getElementById('firstNumber').value);
let secondNumber = parseInt(document.getElementById('secondNumber').value);
return {firstNumber, secondNumber};
}

function myFunction(){
    let textInput = document.getElementById('textInput').value;
    document.getElementById('demo').innerHTML = textInput;
};

function adding(){
 let number = parseInt(document.getElementById('number').value);
 let finalNumber = 0;
 for (let i = 0; i <= number; i++) {
    finalNumber += i;
 }
 document.getElementById('addition').innerHTML = finalNumber;
}

function add(){
    let {firstNumber, secondNumber} = numbers();
    let finalNumber = firstNumber + secondNumber;
    document.getElementById('addings').innerHTML = finalNumber;
}

function subtract(){
    let {firstNumber, secondNumber} = numbers();
    let finalNumber = firstNumber - secondNumber;
    document.getElementById('addings').innerHTML = finalNumber;
}
function divide(){
    let {firstNumber, secondNumber} = numbers();
    let finalNumber = firstNumber / secondNumber;
    document.getElementById('addings').innerHTML = finalNumber;
}
function multiply(){
    let {firstNumber, secondNumber} = numbers();
    let finalNumber = firstNumber * secondNumber;
    document.getElementById('addings').innerHTML = finalNumber;
}