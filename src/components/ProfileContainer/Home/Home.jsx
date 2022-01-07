import React from 'react'
import Profile from './Profile'
import Footer from './Footer/Footer'
import "./Home.css"
import About from '../../About'
export default function Home() {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
            <About/>
        </div>
    )
}
