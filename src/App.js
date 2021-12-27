
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
import PixabayApiFetch from './screens/PixabayApiFetch';
import JsonPlaceholder from './screens/JsonPlaceholder';
import Allscreens from './screens/Allscreens';



function App() {

  

  return (
    <>
    <Router>
         <Header />
         
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pixabay" element={<PixabayApiFetch />} />
        <Route path="/json" element={<JsonPlaceholder />} />
        <Route path="/allList" element={<Allscreens />} />
        
      </Routes>

      </Router>

  
    
     
    </>
  );
}

export default App;
