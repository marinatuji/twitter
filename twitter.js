function captureMessage(event, form) {
	event.preventDefault();
	let messageWrited = form.messageWrited.value;
	document.getElementById('display').textContent = messageWrited;
	disableButton();
	cleanContent();
	createTweets();
	return messageWrited;
}

function cleanContent() {
	document.getElementById('input-textarea').value = '';
}

function disableButton() {
	document.getElementsByName('submitTweet')[0].disabled = true;
}

function enableButton() {
	document.getElementsByName('submitTweet')[0].disabled = false;
}

function createTweets() {
	document.getElementsByName('submitTweet')[0].disabled = false;
	let i = 0;
	let tweet = document.createElement('p');
	document.getElementsByTagName('p')[i];
	i++;
}

function countChars(event) {
	const messageChars = event.value.length;//tamnho da minha msg
	const messageSize = 140 - messageChars;
	const counterElement = document.getElementById('regressive-counter');
	counterElement.value = messageSize;
	counterBehavior(counterElement);
	return messageSize;
}

function counterBehavior(element) {
	const counterValue = parseInt(element.value);
	if (counterValue < 0) {
		disableButton();
		element.style.color = 'grey';
	} else if (counterValue > 10 && counterValue <= 20) {
		element.style.color = 'orange';
	} else if (counterValue > 0 && counterValue <= 10) {
		element.style.color = 'red';
	} else if (counterValue > 20 && counterValue <= 140) {
		element.style.color = 'black';
	}
}