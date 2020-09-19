import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className="parent">
      
      {/*<Counter/>*/ }
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/">   {/*if the path is / then do that*/}
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/product/:id">
              <Product/>
            </Route>
            
          </Switch>
        </div>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
