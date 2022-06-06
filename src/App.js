import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import React from 'react';
import { Route , Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import Page from './pages/Page/Page';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
  );
}

export default App;
