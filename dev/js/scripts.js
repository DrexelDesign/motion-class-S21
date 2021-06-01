// import { gsap } from "gsap";

import $ from "jquery"

let musicIsPlaying = false;

let audio = document.getElementById("audio");
// volume is 0 - 1
// audio.volume = 0.8;

$("#box").on("click",function(){

    if(musicIsPlaying === false){
        // console.log("play");
        audio.play();
        musicIsPlaying = true;
    }else{
        audio.pause();
        // audio.stop();
        musicIsPlaying = false;
    }
})



