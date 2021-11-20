let recordingActive = false;
let ttr = {
	metadata: {
		username: "lukew3",
		software: "ttr custom",
		time: (new Date()).getTime(),
		"prompt": "The quick brown fox jumps over the lazy dog",
		language: "english",
		mode: "words",
	},
	data: []
};

const downloadObjectAsJson = (exportObj, exportName) => {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".ttr");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

document.addEventListener("keydown", (event) => {
	if (recordingActive) {
		console.log(event.key);
		ttr.data.push([
			(new Date()).getTime() - ttr.metadata.time,
			event.key
		]);
	}
});

const startNewRecording = () => {
	ttr.data = [];
	ttr.metadata.time = (new Date()).getTime();
	recordingActive = true;
}

const resumeRecording = () => {
	recordingActive = true;
}

const stopRecording = () => {
	recordingActive = false;
}

const setMetadata = (inMetadata) => {
	let heldtime = ttr.metadata.time;
	ttr.metadata = inMetadata;
	ttr.metadata.time = heldtime;
}

const downloadFile = () => {
	downloadObjectAsJson(ttr, "results");
}

module.exports = {
	startNewRecording,
	resumeRecording,
	stopRecording,
	downloadFile
}
