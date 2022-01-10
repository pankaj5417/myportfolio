
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import  './components/ProfileContainer/Home/Home.css';
import Profile from './components/ProfileContainer/Home/Profile';
import Footer from './components/ProfileContainer/Home/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/contact/Contact';
import Particle2 from './components/Projects/Particle2';
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App ">
     
      <div className='home-container'>
      
      <Navbar />
       
      <Profile />
      <Footer />
      
    <About />
    <TechStack />

    <Projects />
    <Footer />
    <Contact />

    </div>

    <Routes>
     
      
    <Route path="/about" element={<About />}></Route>

      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/contactus" element={<Contact />}></Route>
       <Route path="/projects" element={<Projects /> }></Route>

      
            
     

       <Route path="*" element={<div>Not found</div> }></Route>

    </Routes>
     
    </div>
  );
}

export default App;
