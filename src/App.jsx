import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './COMPONENTS/About';
import Our_menu from './COMPONENTS/Our_menu';
import Blog from './COMPONENTS/Blog';
import Contact from './COMPONENTS/Contact';
import Shop from './COMPONENTS/Shop';

function App() {

  return (
    <>
      <Router>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path="/our-menu" element={<Our_menu/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/shop" element={<Shop/>}/>
          </Routes>   
      </Router> 
    </>
  )
}

export default App
