// Your code goes here
// Task #1
function isEquals(number1, number2) {
    if (!Number(number1) || !Number(number2)) {
        return 'Please input valid number';
    }

    return number1 - number2 === 0;
}

// Task #2
function isBigger(number1, number2) {
    if (!Number(number1) || !Number(number2)) {
        return 'Please input valid number';
    }

    return number1 - number2 > 0;
}

// Task #3
function storeNames() {
    const argumentValueList = [];

    for (let i = 0; i < arguments.length; i++) {
        argumentValueList.push(arguments[i]);
    }
    return argumentValueList;
}

// Task #4
function getDifference(number1, number2) {
    if (!Number(number1) || !Number(number2)) {
        return 'Please input valid number';
    }

    if (isBigger(number1, number2)) {
        return number1 - number2;
    }
    return number2 - number1;
}

// Task #5
function negativeCount(arr) {
    if (!Array.isArray(arr) || arr.length < 0) {
        return 'Please input valid array';
    }
    
    let count = 0;
    arr.forEach((el) => el < 0 && count++);
    return count;
}

// Task #6
function letterCount(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please input valid strings';
    }

    if (string2.length > 1) {
        return 'Please enter second string consisting of only 1 character';
    }

    let occurenceCount = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2) {
            occurenceCount++;
        }
    }
    return occurenceCount;
}

// Task #7
function countPoints(arr) {
    if (!Array.isArray(arr) || arr.length < 0) {
        return 'Please enter valid data';
    }

    let total = 0;
    for (let i = 0; i< arr.length; i++) {
        let each = arr[i].split(':');
        let x = +each[0];
        let y = +each[1];

        if (isBigger(x, y)) {
            total += 3;
        }

        if (isBigger(y, x)) {
            total += 0;
        }

        if (isEquals(x, y)) {
            total += 1;
        }
    }
    
    return total;
}







