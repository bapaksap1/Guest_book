import React from 'react';

import Home from './GuestBook/Layout/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Component/GlobalStyle';
import Portal from './GuestBook/Layout/Portal';
import Login from './GuestBook/Layout/Login';
import ApolloClientProvider from './Hooks/apolloClient';
import TemplatePDF from './PDFConvert/TemplatePDF';
import GeneratePDF from './PDFConvert/GeneratePDF';
import { SnackbarProvider } from 'notistack';
function App() {

  return ( 
    <BrowserRouter> 
    <ApolloClientProvider>
      <SnackbarProvider>
    <GlobalStyle/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portal" element={<Portal />}/>
          <Route path="portal/login" element={<Login />}/>
          <Route path="pdf" element={<TemplatePDF />}/>
          <Route path="generate" element={<GeneratePDF />}/>
      </Routes>
      </SnackbarProvider>
    </ApolloClientProvider>
    </BrowserRouter>
  );
}

export default App;
