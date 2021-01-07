import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from '../src/Component/Pages/Homepages/homepage.component';

const HatsPage = ()=> (
  <div>
    <h1> HATSPAGe</h1>
  </div>
)


function App() {
  return (
    <div >
      <switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
