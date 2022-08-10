import React from 'react';
import Info from './Info'
import data from './data';
import './content.css'

export default function Content() {
    const info = data.map(item => {
        return (
           <Info
                key={item.id}
                {...item}
            />
        )
    })        
    return (
        <div className='content'>
            <section>
              <span className='user--top'>
                <i class="fas fa-home top house"></i>
                <i class="fa fa-angle-right arrow"></i>
                <h3>Users</h3>
              </span>
              <button className='add--btn'>+ Add User</button>
              <div className='block'>
                <div className='anything'>
                   <i class='fas fa-search any '></i>
                   <input type="text" placeholder="Search.."></input>
                 
                  </div>
             <button className='search--btn'><i class='fas fa-sliders-h slider'></i></button>
              
               <button className='send--btn'>Send OTP</button>
             </div>
            </section>
            <section className="cards-list">
                {info}
            </section>
        </div>
       
    )

}
