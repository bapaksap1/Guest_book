import React from 'react';

import Home from './GuestBook/Layout/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Component/GlobalStyle';
import Portal from './GuestBook/Layout/Portal';

function App() {
  return ( 
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portal" element={<Portal />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
