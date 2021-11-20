const ttr = require("../index.js");

ttr.setMetadata({
	username: "lukew3",
	software: "ttr custom",
	"prompt": "The quick brown fox jumps over the lazy dog",
	language: "english",
	mode: "words",
});

ttr.startNewRecording();

document.getElementById("downloadButton").addEventListener("click", (event) => {
	ttr.downloadFile();
});

