import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

// Crear un contexto para el estado del encabezado

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
