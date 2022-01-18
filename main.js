Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width: 345,
    height: 325,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap( function(data_uri)
    {   
    document.getElementById("result").innerHTML = '<img id="captured_image" src = " '+data_uri+' "/> ';
        
    });
}

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5zRnBo_RV/model.json',modelLoaded);

 function modelLoaded()
 {
console.log('modelLoaded!');
 }

  function speak()
  {

 var synth = window.SpeechSynthesis;
 speak_data_1 = " the first prediction is " + Prediction_1;
 speak_data_2 = " the second prediction is " + Prediction_2;
 var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
 synth.speak(utterThis);

  }                         