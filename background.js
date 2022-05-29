chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.message === 'clicked browser action') {
		console.log('Hello');
	}
});
