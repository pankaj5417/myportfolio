
import React from 'react'
import Particles from "react-tsparticles";

export default function Particle2() {
    return (
        
            <Particles
               params={{
                   particles:{
                       number:{
                           value:30,
                           density:{
                               enable:true,
                               value_area:900
                           }
                       }
                   }
               }}
	        />
      
    )
}
