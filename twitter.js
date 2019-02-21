function captureMessage(event, form) {
	event.preventDefault();
	let messageWrited = form.messageWrited.value;
	disableButton();
	cleanContent();
	createTweets(messageWrited);
}

function cleanContent() {
	document.getElementById('input-textarea').value = '';
	document.getElementById('regressive-counter').value = '';
}

function disableButton() {
	document.getElementsByName('submitTweet')[0].disabled = true;
}

function enableButton() {
	const counterValue = parseInt(document.getElementById('regressive-counter').value);
	if (counterValue >= 0) {
		document.getElementsByName('submitTweet')[0].disabled = false;
	}
}

//.replace(/\r?\n/g, '<br />') //word-wrap: break-word
function createTweets(messageWrited) {
	let sectionTweets = document.getElementById('messages-tweeted');
	let tweet = document.createElement('article');
	let date = getDate();
	//let formatMessage = messageWrited.replace(/\r?\n/g, '<br />');
	let textTweet = document.createTextNode(`${date} - ${messageWrited}`);
	tweet.appendChild(textTweet);
	sectionTweets.appendChild(tweet);
}
//

function countChars(event) {
	const messageChars = event.value.length;
	const messageSize = 140 - messageChars;
	const counterElement = document.getElementById('regressive-counter');
	counterElement.value = messageSize;
	counterBehavior(counterElement);
	resize();
}

function counterBehavior(element) {
	const counterValue = parseInt(element.value);//contador regressivo
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

function resize() {
	let resizeTextarea = document.getElementById('input-textarea');
	resizeTextarea.style.height = 'auto';
	resizeTextarea.style.height = resizeTextarea.scrollHeight + "px";
}

function getDate(	) {
	const dateTime = new Date();
	const tweetDate = dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear() + '  ' + dateTime.getHours() + ':' + dateTime.getMinutes();
	return tweetDate;
}