import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Header from '../components/Header';

export default function Home() {
    return (
        <div className="App">
          <Sidebar />   
          <Header />
          <Main />
       
        </div>
      );
}
