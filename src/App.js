import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

// Crear un contexto para el estado del encabezado
export const HeaderContext = createContext();

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="App">
      <Router>
        <HeaderContext.Provider value={{ showHeader, setShowHeader }}>
          {showHeader && <Header />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </HeaderContext.Provider>
      </Router>
    </div>
  );
}

export default App;
