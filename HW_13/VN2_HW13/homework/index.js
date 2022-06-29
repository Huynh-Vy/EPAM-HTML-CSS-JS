function getAge(dateObj) {
    let today = new Date();
    let age = today.getFullYear() - dateObj.getFullYear();
    let m = today.getMonth() - dateObj.getMonth();

    if (m < 0 || m === 0 && today.getDate() < dateObj.getDate()) {
        age--;
    }
    return age;
}

function getWeekDay(dateObj) {
    return new Date(dateObj).toLocaleDateString('en-us', { weekday: 'long'});   
}

function getAmountDaysToNewYear() {
    let today = new Date();
    let newYear = today.getFullYear() + 1;
    let newYearDate = new Date(newYear, 1, 1);
    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    return Math.round((newYearDate.getTime() - today.getTime())/ MILISECONDS_PER_DAY);
}

function getProgrammersDay(year) {
    if (year <= 0 || typeof year !== 'number' || !Number.isInteger(year)) {
        return 'Please input valid year';
    }

    let programmerDay = '';
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        programmerDay = `12 Sep, ${year}`;
    } else {
        programmerDay = `13 Sep, ${year}`
    }

    let programmerDayToWeekDay = getWeekDay(new Date(programmerDay));
    return `${programmerDay} (${programmerDayToWeekDay})`;
}

function howFarIs(specifiedWeekDay) {
    if (typeof specifiedWeekDay !== 'string' || specifiedWeekDay === '' || specifiedWeekDay === null) {
        return 'Please input a valid weekday string';
    }

    if (/\d/.test(specifiedWeekDay) === true) {
        return 'Please input a valid weekday string';
    }

    let now = new Date();
    let today = getWeekDay(now);
    let specifiedDayNumber = 0;
    let todayNumber = now.getDay();
    let number = 0;
    let specifiedWeekdayInProperCase = specifiedWeekDay[0].toUpperCase() + specifiedWeekDay.slice(1).toLowerCase();

    let dayNumber = {
        'Sunday' : 0,
        'Monday' : 1,
        'Tuesday' : 2,
        'Wednesday' : 3,
        'Thursday' : 4,
        'Friday' : 5,
        'Saturday' : 6,
    }

    for (let day in dayNumber) {
        if (day === specifiedWeekdayInProperCase) {
            specifiedDayNumber = dayNumber[day];
        }
    }

    if (today === specifiedWeekdayInProperCase) {
        return `Hey, today is ${ specifiedWeekdayInProperCase } =)`; 
    } else {
        number = specifiedDayNumber - todayNumber;
        return `It's ${ number } day(s) left till ${ specifiedWeekdayInProperCase }.`;
    }
    
}

function isValidIdentifier(variableName) {
    if (typeof variableName !== 'string') {
        return 'Please input valid variable name in string';
    }

    if (variableName === '' || variableName === null) {
        return 'The varible name can not be empty or null';
    }

    let regex = '^([a-zA-Z_$][a-zA-Z\d_$]*)$';
    if (variableName.match(regex)) {
        return true;
    }
    return false;
}

function capitalize(string) {
    if (typeof string !== 'string') {
        return 'Please input a valid string';
    }

    if (string === '' || string === null) {
        return 'The string can not be empty or null';
    }

    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
} 


function isValidAudioFile(file) {
    if (typeof file !== 'string') {
        return 'Please input a valid string';
    }

    if (file === '' || file === null) {
        return 'The string can not be empty or null';
    }

    let regex2 = /^[a-z][A-Z]+.(mp3|.flac|.alac|.aac)$/i;
    return regex2.test(file);
}

function getHexadecimalColors(string){
    if (typeof string !== 'string') {
        return 'Please input a valid string';
    }

    if (string === '' || string === null) {
        return 'The string can not be empty or null';
    }

    let regexBeginWithHash = /#[a-zA-Z0-9]+/gi;
    let regexMatchHexaCode = /^#([0-9A-Fa-f]{3}){1,2}$/i;

    let hexaArray = string.match(regexBeginWithHash);
    let result = []

    for (let i = 0; i < hexaArray.length; i++) {
        if(regexMatchHexaCode.test(hexaArray[i])) {
            result.push(hexaArray[i]);
        }
        result.push();
    }
    return result;
}

function isValidPassword(string) {
    if (typeof string !== 'string') {
        return 'Please input a valid string';
    }

    if (string === '' || string === null) {
        return 'The string can not be empty or null';
    }

    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(string);
}

function addThousandsSeparators(inputData) {
    if (typeof inputData === 'string' && !Number(inputData)) {
        return 'Please input valid string or number';
    }

    if (typeof inputData === 'array' || typeof inputData === 'object') {
        return 'Please input valid string or number';
    }

    return inputData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText(text) {
    if (typeof text !== 'string') {
        return 'Please enter a valid string';
    }

    if (typeof text === '' || text === null) {
        return 'Text can not be empty or null';
    }

    let regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    
    if (text.match(regex)) {
        return text.match(regex);
    }
    return [];
}
















