import { gsap } from "gsap";


let clipPathTL = gsap.timeline();
// move the graphic and keep the clip path still
// clipPathTL.fromTo("#color-stripes",{x:"+=350"},{duration:4, x:"-=400"});

// move the clip path and keep the graphic still
clipPathTL.to("#clip-circle",{duration:2, x:"-=400"})
            .to("#clip-circle",{duration:2, y:"-=400", scale:0.5})
            .to("#clip-circle",{duration:2, y:"+=400", x:"+=500"});
