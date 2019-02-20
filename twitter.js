function captureMessage(event, form) {
	event.preventDefault();
	let messageWrited = form.messageWrited.value;
	document.getElementById('display').textContent = messageWrited;
	disableButton();
	cleanContent();
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
	i ++;
}

function countChars(event) {
	const messageChars = event.value.length ;//tamnho da minha msg
	const messageSize = 140 - messageChars;
	document.getElementById('regressive-counter').value = messageSize;
	return messageSize;
}

function counterBehavior(event) {
	if(event.value == 0) {
		disableButton();
	}
		enableButton();
}
//tentar fazer a opção 2 que é com o onsubmit e disabled e uma função pra cada coisa