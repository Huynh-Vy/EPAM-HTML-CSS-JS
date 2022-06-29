/* eslint-disable no-magic-numbers */
const appRoot = document.getElementById('app-root');

function setAttributes(el, attrs) {
    for(let key in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, key)) {
            el.setAttribute(key, attrs[key]);
        }
    }
}

function removeTable() {
    let row = table.rows;
    let i = row.length;
    while (--i) {
        table.deleteRow(i);
    }
    table.style.visibility = 'hidden';
}

function showCountry (list) {
    for (let i = 0; i < list.length ; i++) {
        const trBody = document.createElement('tr');
        table.appendChild(trBody);
        trBody.style.textAlign = 'center';
        const td1 = document.createElement('td');
        trBody.appendChild(td1);
        td1.innerHTML = list[i].name;
        td1.style.padding = '1.5rem 0';
        td1.style.border = '1px solid lightGrey';
        const td2 = document.createElement('td');
        trBody.appendChild(td2);
        td2.innerHTML = list[i].capital;
        td2.style.padding = '1rem 0';
        td2.style.border = '1px solid lightGrey';
        const td3 = document.createElement('td');
        trBody.appendChild(td3);
        td3.innerHTML = list[i].region;
        td3.style.padding = '1.5rem 0';
        td3.style.border = '1px solid lightGrey';
        const td4 = document.createElement('td');
        trBody.appendChild(td4);
        td4.style.padding = '1.5rem 0';
        td4.style.border = '1px solid lightGrey';
        td4.innerHTML = Object.values(list[i].languages);
        const td5 = document.createElement('td');
        trBody.appendChild(td5);
        td5.innerHTML = list[i].area;
        td5.style.padding = '1.5rem 0';
        td5.style.border = '1px solid lightGrey';
        const td6 = document.createElement('td');
        trBody.appendChild(td6);
        td6.style.padding = '1.5rem 0';
        td6.style.border = '1px solid lightGrey';
        const img = document.createElement('img');
        td6.appendChild(img);
        img.setAttribute('src', `${list[i].flagURL}`);
        img.style.width = '40px';
    }
}


function deleteRow(text, cellNumber) {
    let tr = document.querySelectorAll('tr');
    for (let i = 1; i < tr.length; i++) {
        let cell = tr[i].cells[cellNumber];
        let cellText = cell.innerHTML;

        if (cellText !== text) {
            tr[i].remove();
        }
    }
}

function sortDesc() {
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[0];
        y = rows[i + 1].getElementsByTagName('td')[0];
        if (y.innerHTML.toLowerCase() > x.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortAsc() {
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[0];
        y = rows[i + 1].getElementsByTagName('td')[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortNumAsc() {
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[4];
        // eslint-disable-next-line no-magic-numbers
        y = rows[i + 1].getElementsByTagName('td')[4];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortNumDesc() {
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[4];
        y = rows[i + 1].getElementsByTagName('td')[4];
        if (Number(y.innerHTML) > Number(x.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

const h1 = document.createElement('h1');
appRoot.appendChild(h1);
h1.innerText = 'Countries Search';
h1.style.textAlign = 'center';
h1.style.fontSize = '35px';

const divForm = document.createElement('div');
appRoot.appendChild(divForm);

const form = document.createElement('form');
divForm.appendChild(form);

const divRadio = document.createElement('div');
form.appendChild(divRadio);
divRadio.classList.add('radio-field');
divRadio.style.cssText = 'display: flex; flex-direction: row-reverse; justify-content: center';

const divRadioInputs = document.createElement('div');
divRadio.appendChild(divRadioInputs);
divRadioInputs.classList.add('radio-inputs');

const divRadioByRegion = document.createElement('div');
divRadioInputs.appendChild(divRadioByRegion);

const radioInputByRegion = document.createElement('input');
divRadioByRegion.appendChild(radioInputByRegion);
setAttributes(radioInputByRegion, {
    'type' : 'radio', 
    'id' : 'byRegion', 
    'name' : 'radio', 
    'value' : 'region', 
});

const labelByRegion = document.createElement('label');
divRadioByRegion.appendChild(labelByRegion);
labelByRegion.setAttribute('for', 'byRegion');
labelByRegion.innerHTML = 'By Region';

const divRadioByLanguage = document.createElement('div');
divRadioInputs.appendChild(divRadioByLanguage);

const radioInputByLanguage = document.createElement('input');
divRadioByLanguage.appendChild(radioInputByLanguage);
setAttributes(radioInputByLanguage, {
    'type' : 'radio', 
    'id' : 'byLanguage', 
    'name' : 'radio', 
    'value' : 'language',
});

const labelByLanguage = document.createElement('label');
divRadioByLanguage.appendChild(labelByLanguage);
labelByLanguage.setAttribute('for', 'byLanguage');
labelByLanguage.innerHTML = 'By Language';

const divTypeOfSearch = document.createElement('div');
divRadio.appendChild(divTypeOfSearch);
divTypeOfSearch.innerHTML = 'Please choose type of search:';
divTypeOfSearch.classList.add('radio-text');
divTypeOfSearch.style.marginRight = '5px';

const divSelect = document.createElement('div');
form.appendChild(divSelect);
divSelect.classList.add('select-field');
divSelect.style.cssText = 'display: flex; flex-direction: row-reverse; justify-content: center';

const divSelectField = document.createElement('div');
divSelect.appendChild(divSelectField);

const select = document.createElement('select');
divSelectField.appendChild(select);
setAttributes(select, {'name' : 'select', 'id' : 'select'});
select.style.width = '7rem';

const optionSelectValue = document.createElement('option');
select.appendChild(optionSelectValue);
optionSelectValue.setAttribute('value', 'select value');
optionSelectValue.innerHTML = 'Select Value';

radioInputByRegion.addEventListener('click', function clickRadioRegion() {
    radioInputByRegion.setAttribute('checked', true);
    radioInputByLanguage.setAttribute('checked', false);
    select.removeAttribute('disabled');

    const regionList = externalService.getRegionsList();
    const languageList = externalService.getLanguagesList();

    removeTable();

    for (let i = 0; i < regionList.length; i++) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', regionList[i]);
        option.innerHTML = regionList[i];
    }
    
    for (let i = 0; i < languageList.length; i++) {
        let options = document.querySelectorAll('option');
        
        for (let j = 0 ; j < options.length; j++) {
            if (options[j].value === languageList[i]) {
                options[j].remove();
            }
        }
    }
})

const divNoItems = document.createElement('div');
appRoot.appendChild(divNoItems);
divNoItems.innerHTML = 'No items, please choose search query';
divNoItems.style.cssText = 'display: none; text-align: center; margin-top: 15px';

radioInputByRegion.addEventListener('click', function() {
    divNoItems.style.display = 'block';
})

radioInputByLanguage.addEventListener('click', function clickRadioLanguage() {
    radioInputByLanguage.setAttribute('checked', true);
    radioInputByRegion.setAttribute('checked', false);
    select.removeAttribute('disabled');

    const languageList = externalService.getLanguagesList();
    const regionList = externalService.getRegionsList();

    removeTable();

    for (let i = 0; i < languageList.length; i++) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', languageList[i]);
        option.innerHTML = languageList[i];
    }
    for (let i = 0; i < regionList.length; i++) {
        let options = document.querySelectorAll('option');
        
        for (let j = 0 ; j < options.length; j++) {
            if (options[j].value === regionList[i]) {
                options[j].remove();
            }
        }
    }
})

radioInputByLanguage.addEventListener('click', function() {
    divNoItems.style.display = 'block';
})

if (radioInputByRegion.checked === false && radioInputByLanguage.checked === false) {
    select.setAttribute('disabled', '');
}

const divSelectText = document.createElement('div');
divSelect.appendChild(divSelectText);
divSelectText.innerHTML = 'Please choose search query:';
divSelectText.style.marginRight = '17px';

const divTable = document.createElement('div');
appRoot.appendChild(divTable);
divTable.style.cssText = 'display: flex; justify-content: center';
const table = document.createElement('table');
divTable.appendChild(table);
table.style.marginTop = '15px';
table.style.display = 'none';
table.style.borderCollapse = 'collapse';
const trHead = document.createElement('tr');
table.appendChild(trHead);

const thContent = [
    'Country Name',
    'Capital', 
    'World Region', 
    'Languages',
    'Area',
    'Flag',
]

for (let i = 0; i < thContent.length; i++) {
    const th = document.createElement('th');
    trHead.appendChild(th);
    th.innerHTML = thContent[i];
    th.style.cssText = 'background-color: green; color: white; height: 30px; border: 1px solid lightGrey';
    th.style.borderCollapse = 'collapse';

    if (thContent[i] === 'Languages') {
        th.style.width = '30rem';
    } else {
        th.style.width = '12rem';
    }
}


select.addEventListener('change', function() {
    if(select.options[select.selectedIndex].value === 'select value') {
        divNoItems.style.display = 'block';
        table.style.display = 'none';
    } else {
        divNoItems.style.display = 'none';
        table.style.display = 'block';
    }
})

function showCountryByRegion () {
    if (radioInputByRegion.checked === true && select.options[select.selectedIndex].value !== 'select value') {
        const region = select.options[select.selectedIndex].value;
        const countryList = externalService.getCountryListByRegion(region);
        table.style.visibility = 'visible';
        deleteRow(region, 2);
        showCountry(countryList);
    }
}

function showCountryByLanguage () {
    if (radioInputByLanguage.checked === true && select.options[select.selectedIndex].value !== 'select value') {
        const language = select.options[select.selectedIndex].value;
        const languageList = externalService.getCountryListByLanguage(language);  
        table.style.visibility = 'visible';
        deleteRow(language, 3);
        showCountry(languageList);   
    }
}

select.addEventListener('change', showCountryByRegion);
select.addEventListener('change', showCountryByLanguage);

const nameCell = trHead.firstChild;
const areaCell = trHead.childNodes[4];

const arrowUp = document.createElement('span');
arrowUp.innerHTML = '&uarr;';
arrowUp.style.cssText = 'margin-left: 10px; font-size: 18px; color: yellow; cursor: pointer';
const arrowDown = document.createElement('span');
arrowDown.innerHTML = '&darr;';
arrowDown.style.cssText = 'margin-left: 10px; font-size: 18px; color: yellow; cursor: pointer; display: none ';
const arrowUpNum = document.createElement('span');
arrowUpNum.innerHTML = '&uarr;';
arrowUpNum.style.cssText = 'margin-left: 10px; font-size: 18px; color: yellow; cursor: pointer';
const arrowDownNum = document.createElement('span');
arrowDownNum.innerHTML = '&darr;';
arrowDownNum.style.cssText = 'margin-left: 10px; font-size: 18px; color: yellow; cursor: pointer; display: none ';

nameCell.appendChild(arrowUp);
nameCell.appendChild(arrowDown);
areaCell.appendChild(arrowUpNum);
areaCell.appendChild(arrowDownNum);

arrowDown.addEventListener('click', function() {
    sortDesc();
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'inline-block';
});

arrowUp.addEventListener('click', function() {
    sortAsc();
    arrowUp.style.display = 'none';
    arrowDown.style.display = 'inline-block';
});

arrowUpNum.addEventListener('click', function() {
    sortNumAsc();
    arrowUpNum.style.display = 'none';
    arrowDownNum.style.display = 'inline-block';
});

arrowDownNum.addEventListener('click', function() {
    sortNumDesc();
    arrowDownNum.style.display = 'none';
    arrowUpNum.style.display = 'inline-block';
});








































