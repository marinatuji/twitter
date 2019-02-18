function captionMessage(event, form) {
	event.preventDefault();
	let messageWrited = form.messageWrited.value;
	document.getElementById('display').innerHTML = messageWrited;
}

function countCharacteres(form){
	// event.composed;
}
