import './App.css';
// Ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
