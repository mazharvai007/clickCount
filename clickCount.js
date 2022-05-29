console.log('Hello JS');

let count = 0;

const clickWrap = document.createElement('div');
clickWrap.className = 'clickWrap';
document.body.appendChild(clickWrap);

const titleWrap = document.createElement('h2');
titleWrap.innerHTML = `Clicked: <span id="numberCount"></span> Times`;
clickWrap.appendChild(titleWrap);

const clickEvents = document.createElement('div');
clickEvents.className = 'clickEvents';
clickWrap.appendChild(clickEvents);

const clickPlus = document.createElement('div');
clickPlus.className = 'clickPlus';
clickPlus.innerHTML = '+';
clickEvents.appendChild(clickPlus);

const clickMinus = document.createElement('div');
clickMinus.className = 'clickMinus';
clickMinus.innerHTML = '-';
clickEvents.appendChild(clickMinus);

const clickReset = document.createElement('div');
clickReset.className = 'clickReset';
clickReset.innerHTML = 'Reset';
clickEvents.appendChild(clickReset);

const counting = document.getElementById('numberCount');
const getClickPlus = document.querySelector('.clickPlus');
const getClickMinus = document.querySelector('.clickMinus');
const getClickReset = document.querySelector('.clickReset');

count = localStorage.getItem(window.location.hostname + 'count');
counting.innerHTML = Number(JSON.parse(count));

getClickPlus.addEventListener('click', () => {
	counting.innerHTML = ++count;
	localStorage.setItem(window.location.hostname + 'count', count);
});

getClickMinus.addEventListener('click', () => {
	counting.innerHTML = --count;
	localStorage.setItem(window.location.hostname + 'count', count);
});

getClickReset.addEventListener('click', () => {
	count = 0;
	counting.innerHTML = count;
	localStorage.setItem(window.location.hostname + 'count', count);
});
