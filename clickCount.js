const clickCount = document.querySelector('.clickWrapp h2 span');
const clickPlus = document.querySelector('.clickPlus');
const clickMinus = document.querySelector('.clickMinus');
const clickReset = document.querySelector('.clickReset');

let count = localStorage.getItem(window.location.hostname + 'count');
clickCount.innerHTML = count;

clickPlus.addEventListener('click', () => {
	clickCount.innerHTML = ++count;
	localStorage.setItem(window.location.hostname + 'count', count);
});

clickMinus.addEventListener('click', () => {
	clickCount.innerHTML = --count;
	localStorage.setItem(window.location.hostname + 'count', count);
});

clickReset.addEventListener('click', () => {
	count = 0;
	clickCount.innerHTML = count;
	localStorage.setItem(window.location.hostname + 'count', count);
});
