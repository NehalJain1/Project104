Webcam.set ({
    width: 300,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

//----------------------------------------------//

Webcam.attach('#webcam');

//----------------------------------------------//

function clickImg() {
Webcam.snap( function(data_uri) {
 document.getElementById('output').innerHTML = 
  '<img src="'+data_uri+'"/>';
} );
}

//----------------------------------------------//

console.log("Ml 5 version - ",ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/vKbk4RYR2/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model has loaded");
}
