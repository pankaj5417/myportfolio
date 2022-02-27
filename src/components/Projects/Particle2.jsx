
import React from 'react'
import Particles from "react-tsparticles";

export default function Particle2() {
    return (
        
        <Particles
        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} />
      
    )
}
