import React from 'react';
import './App.css';

import FirstSection from './components/ui/FirstSection';

import Footer from './components/ui/Footer';

import Main from './components/Main';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='App'>
      <FirstSection />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/:name' component={Detail} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
