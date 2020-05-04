import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import './App.css';
// import { Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        {/* <Homepage /> */}
      </switch>
    </div>
  );
}

export default App;
