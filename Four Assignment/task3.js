
/*
Task-3

Here the function will first input a number, then subtract that number from 7 and if the result is less than 7 then it will return the subtraction result. And if the subtraction is more than 7 then the function will return the double of the number that I have input.
*/

function isLGSeven(number) {
    let difference = number - 7;

    if(typeof number !== 'number') {
        return 'Please input number';
    }

    else if(difference < 7) {
        return difference;
    }

    else {
        return number * 2;
    }
}

let anyNumber = -15;

let finalResult = isLGSeven(anyNumber);

console.log(finalResult);