function reverseNumber(num) {
    if (typeof(num) !== 'number' || Number.isInteger(num) === false) return undefined;

    const stringNum = num.toString();
    const arrayNum = [];

    if (num >= 0) {
        for(let i = stringNum.length - 1; i >= 0; i--) {
            arrayNum.push(stringNum[i]);
        }
        return Number(arrayNum.toString().replace(/,/g, ''));
    }

    if (num < 0) {
        const minus = stringNum[0];

        for (let i = stringNum.length; i > 0; i--) {
            arrayNum.push(stringNum[i]);
        }
        return Number(minus + arrayNum.toString().replace(/,/g, ''));
    }
}

function forEach(arr, func) {
    if (arr.length < 0) return undefined;
    if (typeof(func) !== 'function') return undefined;

    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function map(arr, func) {
    if (arr.length < 0) return undefined;
    if (typeof(func) !== 'function') return undefined;

    const newArr = [];
    forEach(arr, function(el) {
        newArr.push(func(el));
    })

    return newArr;
}

function filter(arr, func) {
    if (arr.length < 0) return undefined;
    if (typeof(func) !== 'function') return undefined;

    const filterArray = [];

    forEach(arr, function(el) {
        if(func(el)) {
            filterArray.push(el);
        }
    })
    return filterArray;
}

function getAdultAppleLovers(data) {
    if (data.length < 0) return undefined;

    const mapData = map(data, function(person) {
        return ({
            name: person.name,
            age: person.age,
            favoriteFruit: person.favoriteFruit
        })
    })

    const filterData = filter(mapData, function(person) {
        return person.age > 18 & person.favoriteFruit === 'apple';
    })

    return map(filterData, function(person) {
        return person.name;
    })
}

function getKeys(obj) {
    const keyList = [];

    for (let key in obj) {
        keyList.push(key) ;
    }
    return keyList;
}

function getValues(obj) {
    const valueList = [];

    for (let key in obj) {
        valueList.push(obj[key]);
    }
    return valueList;
}

function showFormattedDate(dateObj) {
    const date = dateObj.getDate();
    const monthNumeric = dateObj.getMonth();
    const year = dateObj.getFullYear();
   
    const monthList = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    let month = '';
    for (let key in monthList) {
        if (Number(key) === monthNumeric) {
            month = monthList[key];
        }
    }
    return (`It is ${date} of ${month}, ${year}`);
}


