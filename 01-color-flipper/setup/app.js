const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const generateRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', () => {
	// Get a random number between 0-3
	const randomNumber = generateRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
