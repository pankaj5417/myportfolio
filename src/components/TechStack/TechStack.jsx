import React from 'react'
import "./TechStack.css"


import  csslogo2 from "../../assets/Home/csslogo2.png"
import bootstrapimg from "../../assets/Home/bootstrapimg.jpg"
import html5logo from "../../assets/Home/html5logo.png"
import jsimg from "../../assets/Home/jsimg.jpg"
import reactlogo from "../../assets/Home/Reactlogo.png"
import gitimg from "../../assets/Home/gitimg.jpg"
import Reduximg from "../../assets/Home/Reduximg.jpg"
import nodejsimg from "../../assets/Home/nodejslogo.jpg"
import mongodbimg from "../../assets/Home/mongodblogo.png"



export default function TechStack() {
    return (
        <div className='techstack' id='techStack'>
            <div className='techstack-heading'>
                <h1>Technical Skills</h1>
            </div>
            
            <div className='techstack-container'>
            <div className='techstack-heading2'>
                <h1>Frontend</h1>
            </div>
                <div className='techstack-frontend'>
                    <img src={csslogo2} alt="ok" />
                    <img src={html5logo} alt="ok" />
                    <img src={jsimg} alt="ok" />
                    <img src={reactlogo} alt="ok" />
                    <img src={gitimg} alt="ok" />
                    <img src={Reduximg} alt="ok" />



                </div>
                <div className='techstack-heading2'>
                <h1>Backend</h1>
               </div>
                <div className='techstack-backend'>
                <img src={nodejsimg} alt="ok" />
                <img src={mongodbimg} alt="ok" />


                </div>
            </div>
            <div className='techstack-heading'>
                <h1>Projects</h1>
            </div>

            
        </div>
    )
}
