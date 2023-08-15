 
import './App.css';
import Header from './components/Header';
import Mod from './components/mod';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import UserLogout from './components/MyUserLogout';
import Registration from './components/Registration';
import OTP from './components/OTP';
import Train from './components/Train';


import Flight from './components/Flight';
import Bus from './components/Bus';
import TravellersChoose from './components/TravellersChoose';
import TrainMap from './components/maps/TrainMap';
import FlightMap from './components/maps/FlightMap';
import BusContent from './components/content/BusContent';
import BusAvailable from './components/available/BusAvailable';
import FlightAvailable from './components/available/FlightAvailable';
import FlightContent from './components/content/FlightContent';
import TrainContent from './components/content/TrainContent';
import TrainAvailable from './components/available/TrainAvailable';
import BusTicket from './components/BusTicket';
import FlightTicket from './components/FlightTicket';
import Footer from './components/Footer';
import TrainTicket from './components/TrainTicket';
import MyBusTicket from './components/myticket/MyBusTicket';
import MyTrainTicket from './components/myticket/MyTrainTicket';
import MyFligthTicket from './components/myticket/MyFlightTicket';
import Offers from './components/Offers';

function App() {
  var loggedIn = false
    if (localStorage.getItem("user_id")){
    loggedIn = true
  } 
  
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={loggedIn ?  <div><Header btn="logout" btnLink="/logout" display=""/> <Train/><TravellersChoose/><TrainMap/> <TrainContent/><Footer/></div> : <div><Header/><Train/><TravellersChoose/><TrainMap/> <TrainContent/><Footer/></div>  } />
 
        <Route exact path="/login" element={<Login/>} />

        <Route exact path="/logout" element={<UserLogout/>} />

        <Route exact path="/registration" element={<Registration/>} />

        <Route exact path="/flight" element={loggedIn ?<div><Header btn="logout" btnLink="/logout" display=""/><Flight/><TravellersChoose/><FlightMap/> <FlightContent/><Footer/></div>:<div><Header/><Flight/><TravellersChoose/><FlightMap/> <FlightContent/><Footer/></div> } />

        <Route exact path="/bus" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><Bus/><TravellersChoose/><BusContent/><Footer/></div>:<div><Header/><Bus/><TravellersChoose/><BusContent/><Footer/></div> } />

        <Route exact path="/bus/available" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><Bus/><BusAvailable/><Footer/></div>:<div><Header/><Bus/><BusAvailable/><Footer/></div> } />

        <Route exact path="/flight/available" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><Flight/><FlightAvailable/><Footer/></div>:<div><Header/><Flight/><FlightAvailable/><Footer/></div> } />

        <Route exact path="/train/available" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><Train/><TrainAvailable/><Footer/></div> :<div><Header/><Train/><TrainAvailable/><Footer/></div> } />

        <Route exact path="/bus/ticket" element={<div>  <BusTicket/> </div> } />

        <Route exact path="/flight/ticket" element={<div><FlightTicket/></div> } />
        <Route exact path="/train/ticket" element={<div> < TrainTicket/> </div> } />

        <Route exact path="/offers" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><Offers/><Footer/></div> :<div><Header/><Offers/><Footer/></div> } />

        <Route exact path="/mybus/ticket" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><MyBusTicket/><Footer/></div> : <div><Header/><MyBusTicket/> <Footer/></div> } />

        <Route exact path="/mytrain/ticket" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><MyTrainTicket/><Footer/></div> : <div><Header/><MyTrainTicket/> <Footer/></div> } />

        <Route exact path="/myflight/ticket" element={loggedIn ? <div><Header btn="logout" btnLink="/logout" display=""/><MyFligthTicket/><Footer/></div> : <div><Header/><MyFligthTicket/> <Footer/></div> } />

        <Route exact path="/otp" element={<div><OTP/></div> } />
 
        <Route exact path="/mod" element={<div><Header/><Mod/></div> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;