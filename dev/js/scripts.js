import { gsap } from "gsap";
import $ from "jquery"

let textLength = $("#scrollText").width();
console.log(textLength + " is the text width");

gsap.to("#scrollText",{duration:20, x:-textLength, ease:"none"});


// let textLength = $("#scrollContainer").width();
// console.log(textLength + " is the text width");

// gsap.to("#scrollContainer",{duration:3, x:"-=340", ease:"none", repeat:-1});