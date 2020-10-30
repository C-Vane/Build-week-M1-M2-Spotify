const x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function changevolume(amount) {
  const audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = amount;
}