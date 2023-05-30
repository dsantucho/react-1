import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>

          <Route path='/'>
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
