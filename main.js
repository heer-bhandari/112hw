Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture (){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="blahh" src="'+data_uri+'">';
}
);
}
console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ya5VLUjza/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is"+prediction1;
    speakdata2="And the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
function identify(){
img = document.getElementById("blahh");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label=="thums up"){
document.getElementById("update_emoji").innerHTML="&#128077;"; }

if(results[0].label=="thums down"){
    document.getElementById("update_emoji").innerHTML="&#128078;"; }

    if(results[0].label=="look down"){
        document.getElementById("update_emoji").innerHTML="&#128077;"; }

            if(results[1].label=="look down"){
                document.getElementById("update_emoji2").innerHTML="&#128077;"; }

                if(results[1].label=="thums up"){
                    document.getElementById("update_emoji2").innerHTML="&#128077;"; }

                    if(results[1].label=="thums down"){
                        document.getElementById("update_emoji2").innerHTML="&#128078;"; }
}
}