import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import HouseInfo from './components/houses/HouseInfo';

import HouseState from './context/house/HouseState';

function App() {
  return (
    <HouseState>
      <Router>
        <Navbar />
        <div className='p-4'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:world/:id' component={HouseInfo} />
          </Switch>
        </div>
      </Router>
    </HouseState>
  );
}

export default App;
