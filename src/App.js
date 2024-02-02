import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Header from './header';
import Footer from './footer';
import Landing from './Landing';
import { Routes, Route } from "react-router-dom"
import Pages from './Pages';
import Blog from './Blog';
import Portpholio from './portpholio';


function App(){
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="Landing" element={<Landing/>}/>
      <Route path="Pages" element={ <Pages/> } />
      <Route path="Blog" element={ <Blog/> } />
      <Route path="Portpholio" element={ <Portpholio/> } />

      {/* <Route path="contact" element={ <Contact/> } /> */}
    </Routes>
  </div>
  );
}

export default App;
