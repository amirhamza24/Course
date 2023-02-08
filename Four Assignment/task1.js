
/*
Task-1

In this function, it first takes a positive number as a parameter. First multiply that number by 3, then add 10, then divide by 2, then subtract 5 and it will return the number that I got.
*/

function mindGame(number) {

    if(typeof number !== 'number') {
        return 'Please input number';
    }
    
    let multiply = number * 3;
    let sum = multiply + 10;
    let divided = sum / 2;
    let subtract = divided - 5;

    return subtract;
}

let anyNumber = 33;
let finalResult = mindGame(anyNumber);
console.log(finalResult);