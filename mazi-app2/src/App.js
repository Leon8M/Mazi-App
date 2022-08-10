/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import './App.css'
import Content from './components/Content';
//import Main from './components/Main';
//import Sidebar from './components/Sidebar'
//import Header from './components/Header'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <div className="App--main">
      <Router>
       <Switch>
            <Route path="/" exact component={Home} />   
            <Route path="/users" component={Users} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
// <Router>
  //        
    //  </Router>
 //<Sidebar />
   //     <Header />
     //   <Main />
