// Set initial count
let count = 0;

// Select the counter value
const value = document.querySelector('#value');

// Select the buttons
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		clsList = e.currentTarget.classList;
		if (clsList.contains('decrease')) {
			count--;
		} else if (clsList.contains('increase')) {
			count++;
		} else if (clsList.contains('reset')) {
			count = 0;
		}
		if (count < 0) {
			value.style.color = 'red';
		} else if (count > 0) {
			value.style.color = 'green';
		} else {
			value.style.color = '#222';
		}
		value.textContent = count;
	});
});
