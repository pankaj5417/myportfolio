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
                <p>An aspiring Full stack web developer with background knowledge 
                    of MERN stacks with redux, passionate about building applications
                     with utmost efficiency molded and shaped by Masai school’s 
                     intensive and immersive learning. Looking forward to joining a
                      company where I will be able to contribute towards individual and company growth.
           </p>
            </div>
            <div className='about-me-highlight'>
                <h3>Here are a Few Highlights:</h3>
                <ul>
                    <li className='aboutme-highlighted-text'>Full Stack web development</li>
                    <li className='aboutme-highlighted-text'>Interactive Front End as per the design</li>
                    <li className='aboutme-highlighted-text'>React for building user interfaces </li>
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
              <a href="fw12_Pankaj_kumar_resume2.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}
