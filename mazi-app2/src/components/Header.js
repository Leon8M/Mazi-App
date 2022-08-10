import React from 'react';
import './header.css'
export default function Header() {
    return(
        <div className='header'>
             <h3 className='head'>Dashboard</h3>
             <div className='search'>
                 <i class='fas fa-search icon '></i>
                 <input type="text" placeholder="Search.."></input>
             </div>
             <div className='note'>
               <i class='far fa-bell right '></i>
               <i class='fas fa-sign-out-alt right'></i> 
             </div>
        </div>
    )
}