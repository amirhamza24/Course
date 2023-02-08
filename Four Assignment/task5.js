
/*
Task-5

Here the function will take input of three numbers. Multiply 21 with the first number, multiply 32 with the second number and multiply 43 with the 3rd number. I will add all the results that I get by multiplying. If the sum is more than 2000, then subtract 2000 and return the subtraction. And if the sum is less than 2000 then the sum will return.
*/

function gemsToDiamond(num1, num2, num3) {

    let firstGems = num1 * 21;
    let secondGems = num2 * 32;
    let thirdGems = num3 * 43;

    let totalGems = firstGems + secondGems + thirdGems;

    if(typeof num1 !== 'number') {
        return 'Please input number';
    }

    else if(typeof num2 !== 'number') {
        return 'Please input number';
    }

    else if(typeof num3 !== 'number') {
        return 'Please input number';
    }

    else if(totalGems >= 2000) {
        return totalGems - 2000;
    }

    else {
        return totalGems;
    }
}

let person1 = 20;
let person2 = 200;
let person3 = 50;

let totalGems = gemsToDiamond(person1, person2, person3);

console.log(totalGems);