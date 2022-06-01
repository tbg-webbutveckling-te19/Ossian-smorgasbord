var sound = new Howl({
    src: ['../assets/audio/Immortal.mp3'],
    // src: ['../assets/audio/IntotheDepths.mp3'],
    loop: false,
    html5: true,

  });

$( "#progressbar" ).progressbar({
    value: 0
 });
// Select
var playing = false
var myMusicID = sound.play();
var saveSeek;
var playTime;
var timer;
var timeSpent = 0;
var playButton = document.querySelector(".play")
var loopButton = document.querySelector(".loop")
var looping = false
loopButton.addEventListener("click", function(){
  ToggleLoop()
})
playButton.addEventListener("click", function(){
  TogglePause()
})

function TogglePause() {
  if(!playing) {
    sound.play(myMusicID);
    sound.seek(saveSeek, myMusicID);
    playTime = sound.duration(myMusicID)
    playing = true
    playButton.setAttribute("style", "background-image: url(../assets/images/pause.png)")
    timer = setInterval(() => {
      timeSpent += 0.01
      $( "#progressbar" ).progressbar({
        max: playTime,
        value: timeSpent
      });
    }, 10);
  }
  else{
    sound.pause();
    saveSeek = sound.seek(myMusicID);
    playing = false
    clearInterval(timer)
    playButton.setAttribute("style", "background-image: url(../assets/images/PlayButton.svg)")
  }
}

function ToggleLoop() { 
  if(!looping) {
    sound.loop(true)
    looping = true
    console.log(looping)
    
  }
  else {
    sound.loop(false)
    looping = false
    console.log(looping)
  }
}

sound.on('end', function(){
  if(!looping){
    clearInterval(timer)
    timeSpent = 0;
    playButton.setAttribute("style", "background-image: url(../assets/images/PlayButton.svg)")
    playing = false
  }
});

sound.on('load',function() {
  console.log("works")
  var value = $( "#progressbar" ).progressbar( "option", "value" );

})






