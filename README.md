# ttr-recorder

Javascript package to record and export .ttr typing test files. Read more about the .ttr file format [here](https://github.com/lukew3/ttr-typing-test-file-format)

## Usage
The following code is used in the `main.js` file of the demo project, which can be found in the [demo](https://github.com/lukew3/ttr-recorder/tree/main/demo) directory.
```javascript
const ttr = require("ttr-recorder");
// In the example file, ttr is imported from "../index.js", because it is using the local code

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
```
### Methods

#### setMetadata(metadata)
Set the the metadata properties of the ttr object

#### setFirstChar()
Sets the first event in data to the first letter of the prompt at time 0. This is necessary when the software chooses to start recording after the first keystroke.

#### startNewRecording()
After running this function, ttr-recorder will empty old data from the ttr object, set metadata.time to the current time, and start listening for keystrokes to add to ttr.data.

#### resumeRecording()
After running this, new keystrokes will be saved to ttr.data

#### stopRecording()
Running this will stop keystrokes from being recorded

#### downloadFile()
Running this will download the current ttr file to your computer

#### getJson() (coming soon)
Gets the content of current ttr file as json
