import React from 'react';
import './App.css';
import Header from './fix/Header';
import Footer from './fix/Footer';
import Home from './component/Home';
import Login from './component/Login';
import Test from './test';
import Bottom from './component/Bottom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Itemdetail from './component/Itemdetail';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/items" component={Bottom}/>
          <Route exact path="/items/:itemId" component={Itemdetail} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
