import React from 'react'
import "./About.css"
export default function About() {
    return (
        <div className='about' id='about'>
        <div className='about-container'>
        <div className='aboutme-text'>
           <h1>About Me</h1>
           <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>

        </div>

        <div className='aboutme-container'>
            <div className='aboutme-img'>
                <img src={require('../assets/about.png')} alt="" />
            </div>
            <div className='aboutme-text-section'>
            <div className='about-me-summary'>
                <p>An aspiring Full stack web  developer with background 
                    knowledge of MERN stacks with redux, along with a 
                    knack of building applications with utmost efficiency
                    moulded and shaped by Masai school’s intensive and immersive
                    learning.Look forward to joining a company where I will 
                     be able to contribute towards individual and company growth.
           </p>
            </div>
            <div className='about-me-highlight'>
                <h3>Here are a Few Highlights:</h3>
                <ul>
                    <li className='aboutme-highlighted-text'>Full Stack web development</li>
                    <li className='aboutme-highlighted-text'>Interactive Front End as per the design</li>
                    <li className='aboutme-highlighted-text'>React and React Native</li>
                    <li className='aboutme-highlighted-text'>Redux for State Mnanagement</li>
                    <li className='aboutme-highlighted-text'>Building REST API</li>
                    <li className='aboutme-highlighted-text'>Managing database</li>


                </ul>
            </div>
            <div className="profile-options">
                <a href='#contact'>

                
              <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
              </button>
              </a>
              <a href="fw12_032_Pankaj_kumar.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}
