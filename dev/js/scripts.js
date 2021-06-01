import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

gsap.set("#box",{transformOrigin:"center"});
gsap.set("#star",{transformOrigin:"center"});

let morphTL = gsap.timeline();

// morphTL.to("#box", {duration: 1, morphSVG:"#star"});

// morphTL.to("#box", {duration: 1, morphSVG:"#star",rotation:180, fill:"#000"});

// morphTL.to("#box", {duration: 1, morphSVG:"#hello", fill:"#FB1515"});