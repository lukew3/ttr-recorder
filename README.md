# ttr-recorder

Javascript package to record and export .ttr typing test files.

## Usage
The following code is used in the demo project, which can be found in the [demo](https://github.com/lukew3/ttr-recorder/tree/main/demo) directory.
```javascript
const ttr = require("../index.js");
//Usually the module import would be:
//const ttr = require("ttr-recorder");

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
Set the the metadata properties of the current ttr file

#### startNewRecording()
After running this function, ttr-recorder will empty old data from the ttr object, set metadata.time to the current time, and start listening for keystrokes to add to ttr.data.

#### resumeRecording()
After running this, new keystrokes will be saved to ttr.data

#### stopRecording()
Running this will stop keystrokes from being recorded

#### downloadFile()
Running this will download the current ttr file to your computer
