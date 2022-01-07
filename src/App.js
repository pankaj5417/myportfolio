
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';
import { Navbar } from './components/Navbar';
import { Contacts } from './components/Contactus';
import Home from './components/ProfileContainer/Home/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contactus" element={<Contacts />}></Route>
       <Route path="/product/:id" element={<Products /> }></Route>

      
      
     

       <Route path="*" element={<div>Not found</div> }></Route>

    </Routes>
     
    </div>
  );
}

export default App;
