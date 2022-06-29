function visitLink(path) {
	let count = localStorage.getItem(path);

	if (!count) {
		count = 1;
	} else {
		count++;
	}
	localStorage.setItem(path, count);	
}

function viewResults() {
	let button = document.querySelector('.btn-primary');
	button.insertAdjacentHTML('afterend', '<ul class="count-list"></ul>');
	let ul = document.querySelector('.count-list');

	const countArr = ['Page3', 'Page1', 'Page2'];
	for (let i = 0; i < countArr.length; i++) {
		let li = document.createElement('li');
		ul.appendChild(li);

		if (localStorage.getItem(countArr[i])) {
			li.innerHTML = `You visit ${countArr[i]} ${localStorage.getItem(countArr[i])} time(s)`;
		} else {
			li.innerHTML = `You visit ${countArr[i]} 0 time(s)`;
		}
	}	
}
