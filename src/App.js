import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Weather from './screens/weather';
import Chart from './screens/chart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Weather/> } />
          <Route path="/chart" element={ <Chart/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
