import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


let drawTL = gsap.timeline();

drawTL.to("#myPath",{duration:2, drawSVG:0});
