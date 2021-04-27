import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({paused:true});

mainTL.add(fadeInTL)
.addLabel("marker")
        .add(zoomTL)
        
        .add(spaceShipTL);

        mainTL.play("marker");


// console.log(numberThing);

// GSDevTools.create();