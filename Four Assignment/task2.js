
/*
Task-2

Here, it takes a parameter as input. It will calculate whether that string is odd or even by the length of the string. If the length of the string is even then it will return even and if it is odd then it will return odd.
*/

function evenOdd(str) {
    
    if (typeof str !== 'string') {
        return 'Please input string';
    }

    else if(str.length % 2 === 0) {
        return 'even';
    }

    else {
        return 'odd';
    }
}

let anyString = 'Phero';
let finalResult = evenOdd(anyString);
console.log(finalResult);