import React from 'react';

import Home from './GuestBook/Layout/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Component/GlobalStyle';
import Portal from './GuestBook/Layout/Portal';
import Login from './GuestBook/Layout/Login';
import ApolloClientProvider from './Hooks/apolloClient';
function App() {

  return ( 
    <BrowserRouter> 
    <ApolloClientProvider>
    <GlobalStyle/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portal" element={<Portal />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
    </ApolloClientProvider>
    </BrowserRouter>
  );
}

export default App;
