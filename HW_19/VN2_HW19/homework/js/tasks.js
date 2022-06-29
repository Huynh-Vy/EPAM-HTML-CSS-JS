// Your code goes here
function maxElement(arr) {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return;
    }

    return Math.max(...arr);
}

function copyArray(arr) {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return;
    }

    return [...arr];
}

function addUniqueId(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) || obj === null || obj === undefined) {
        return;
    }

    let id = Symbol('id');
    return {
        [id] : 'abc123',
        ...obj
    }
}

function regroupObject(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) || obj === null || obj === undefined) {
        return;
    }

    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('details')) {
        const {name, details} = obj;

        if (details.hasOwnProperty('id') && details.hasOwnProperty('age') && details.hasOwnProperty('university')) {
            const {id, age, university} = details;

            return {
                university,
                user : {
                    age,
                    firstName: name,
                    id,
                } 
            }
        }
        return 'Object doesn\'t have key name \'id\' or \'age\' or \'university\'';
       
    }
    return 'Object doesn\'t have key name \'name\' or \'details\'';
}

function findUniqueElements(arr) {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return;
    }

    return [...new Set(arr)];
}

function hideNumber(phoneNumber) {
    let regExp = /^[0-9]*$/;
    if (typeof phoneNumber !== 'string' || regExp.test(phoneNumber) === false) {
        return;
    }

    const last4Digits = phoneNumber.slice(-4);
    return last4Digits.padStart(phoneNumber.length, '*');
}

const isRequired = () => {
    throw new Error('Missing property');
}

const add = (param, defaultParam = isRequired()) => {
    if (typeof param !== 'number' || typeof defaultParam !== 'number') {
        return;
    }
    return param + defaultParam;
}

function fetchData() {
    const userNameList = [];
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
       for (let i = 0; i < data.length; i++) {
           userNameList.push(data[i].name);
       }
    });
    return userNameList;    
}

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const user = await response.json();
        
        const userNameList = [];
        for (let i = 0; i < user.length; i++) {
            userNameList.push(user[i].name);
        }
        return userNameList; 

    } catch (error) {
        return error;
    }
}














