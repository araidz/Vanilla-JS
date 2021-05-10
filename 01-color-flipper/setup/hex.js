const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Get a random number between 0-14
const generateRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};

// Get a random hex value
const generateRandomHex = () => {
	let hexValue = '#';
	for (let i = 0; i < 6; i++) {
		let randomNumber = generateRandomNumber();
		hexValue += hex[randomNumber];
	}
	return hexValue;
};

btn.addEventListener('click', () => {
	randomHex = generateRandomHex();
	console.log(randomHex);
	document.body.style.backgroundColor = randomHex;
	color.textContent = randomHex;
});
