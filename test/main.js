const ttr = require("../index.js");

ttr.startNewRecording();

document.getElementById("downloadButton").addEventListener("click", (event) => {
	ttr.downloadFile();
});

