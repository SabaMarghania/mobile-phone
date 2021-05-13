import React from 'react';
import './App.css';
import Phone from "./components/Phone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Screen from './components/Screen'
import Chrome from './components/Chrome';
import ChromeSearch from './components/ChromeSearch';
import Music from './components/Music';
import Login from './components/Login';
import Chat from './components/Chat';
import ThirdChat from './components/ThirdChat';
import SecondChat from './components/SecondChat';
import Message from './components/Message';
import Notepad from './components/Notepad';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <Router>
    <div className="App">
        
    <Switch>

    <Route path="/Notepad">
        <Notepad/>
        </Route>

    <Route path="/Message">
        <Message/>
        </Route>

        <Route path="/ThirdChat">
        <ThirdChat/>
        </Route>

        <Route path="/SecondChat">
        <SecondChat/>
        </Route>
    <Route path="/Chat">
        <Chat/>
        </Route>

    <Route path="/Login">
    {!user ? (
        <Login />
        ):(
          <Message/>
        )}
        </Route>
    <Route path="/Music">
        <Music/>
        </Route>
    <Route path="/ChromeSearch">
        <ChromeSearch/>
        </Route>
       <Route path="/chrome">
        <Chrome/>
        </Route>

      <Route path="/screen">
        <Screen/>
        </Route>

        <Route path="/">
           <Phone/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
