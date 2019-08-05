import React from 'react';
import './App.css';
import Header from './fix/Header';
import Footer from './fix/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/login" component={Home} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
