import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


let drawTL = gsap.timeline();

drawTL.to("#myPath",{duration:2, drawSVG:0});
// drawTL.from("#myPath",{duration:2, drawSVG:0});
// drawTL.to("#myPath",{duration:2, drawSVG:"50% 50%" });

// drawTL.fromTo("#myPath",{drawSVG:"0% 10%" },{duration:2, drawSVG:"95% 100%", ease:"bounce.out"})
//     .to("#myPath",{duration:2, drawSVG:"0% 100%"});