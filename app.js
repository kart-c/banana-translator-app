const textInput = document.querySelector('#text-input');
const button = document.querySelector('.btn-translate');
const output = document.querySelector('.output');

buttonClickHandler = () => {
	const inputValue = textInput.value;
	const url = `https://api.funtranslations.com/translate/minion.json?text=${inputValue}`;
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			output.innerText = json.contents.translated;
		})
		.catch((e) => {
			console.log('Error', e);
			alert('Error getting data from the api. Please try again later');
		});
};
button.addEventListener('click', buttonClickHandler);
