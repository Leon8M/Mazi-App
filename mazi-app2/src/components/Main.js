import React from 'react';
import './main.css'
import graph1 from'../images/graph1.PNG'
import graph2 from '../images/graph2.PNG'
import graph3 from '../images/graph3.PNG'
import graphBottom from '../images/graph bottom.PNG'

export default function Main() {
    return(
        <div className='main'>
           <i class="fas fa-home top"></i>
           <span className='first--graphs'>
             <div>
               <img src={graph1} className='graph1' alt='' />
               <div className='top--left1'>
                 <h6>Total Battery Sales</h6>
                 <h2>$135K</h2>
               </div>
             </div>
             <div>
               <img src={graph2} className='graph2' alt='' />
               <div className='top--left2'>
                   <h6>Total Users</h6>
                   <h2>4234</h2>
               </div>
             </div>
             <div>
               <img src={graph3} className='graph3' alt='' />
               <div className='bottom--left3'>
                   <h2>3.4K</h2>
                   <h6>This Month</h6>
               </div>
               <i class='fas fa-location-arrow bottom3'></i>
             </div>
           </span>
           <div className='performance'>
              <img src={graphBottom} className='graph--btm' alt='' />
              <div className='performance--text'>
                  <h2>Overall Performance</h2>
                  <h5 id='gray'>All Time</h5>
                  <h5>This Year</h5>
                  <h5 id='gray'>This Week</h5>
                  <i class='fas fa-ellipsis-v top--right'></i>
              </div>
           </div>
        </div>
    )
}