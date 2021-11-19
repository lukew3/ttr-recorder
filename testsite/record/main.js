console.log("Hello world");

let ttrRecorder = {
        metadata: {},
        data: {},
        startRecording: () => {

        }
}

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


document.addEventListener("keydown", (event) => {
        console.log(event.key);
	ttr.data.push({
		"time": (new Date()).getTime() - ttr.metadata.time,
		"key": event.key
	});
	console.log(ttr.data);
});

document.getElementById("downloadButton").addEventListener("click", (event) => {
	downloadObjectAsJson(ttr, "results");
});

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".ttr");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

