import React, { createContext, useState } from 'react';
import logo from './Logo.png';
import './App.css';
import Nav from "./Components/Nav/Nav.js"
import Home from './Components/Home/Home';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import Booking from './Components/Booking/Booking';
import MapView from './Components/Map/MapView';
export const IsLoggedContext=createContext()

function App() {
  const [isLogged,setIsLogged]=useState(false)
  return (
    <IsLoggedContext.Provider value={[isLogged,setIsLogged]}>
    <Router>
      <div className="App">
        <Nav></Nav>
        
      </div>
      
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/booking-:destination'>
          <Booking></Booking>
        </Route>
        <PrivateRoute path='/booking-:destination/hotel-details'>
          <HotelDetails></HotelDetails>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
    </Router>
    </IsLoggedContext.Provider>
  );
}

export default App;
