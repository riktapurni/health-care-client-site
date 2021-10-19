import './App.css';
import Home from './components/Home/Home';
// React Bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Services from './components/Services/Services';
import Service from './components/service/Service';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/services/:id">
            <Service></Service>
          </PrivateRoute>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path="/about">
           <About></About>
          </PrivateRoute>
          <PrivateRoute path="/Contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
