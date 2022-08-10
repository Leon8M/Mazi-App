/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import {Link, }  from "react-router-dom";
import "./sidebar.css"
import Imagemazi from '../images/Mazi logo.png'
import Imageicon from '../images/image.jpg'

export default function Sidebar(){
    return(
        <><nav className='sidebar' >
                <div id="sidebar">
                    <section className="title">
                      <img src={Imagemazi} className='mazi' alt='' />
                      <div id='both'>
                        <div id='both--single'>Mazi </div><br></br>
                        <div id='both--second'>Mobility</div>
                      </div> 
                      </section>
                     <ul className="list-items">           
                          <li> 
                            <Link to="/" id='active'><i class="fas fa-home"></i>Home</Link>
                          </li>
                          <li>
                            <Link to="/users" id='active'><i class="fas fa-envelope"></i>Users</Link>
                          </li>
                          <li>
                            <Link id='active'><i class="fas fa-cog"></i>Settings</Link>
                          </li>
                          <li>
                            <Link id='active'><i class='fas fa-map-marker-alt'></i>Locations</Link>
                          </li>
                       </ul>             
                    <div className="user"> 
                      <img src={Imageicon} className='user--img' alt='' />
                      <div className='user--det'>
                        <h6 className='user--name'>Leon</h6>
                        <select className='status'>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      </div>
                    </div>
                </div>
            </nav>
            </>
    )
}
  
//<ul className="list-items">           
  //                        <li><a ><i class="fas fa-home"></i>Home</a></li>
    //                      <li><a ><i class="fas fa-envelope"></i>Users</a></li>
      //                    <li><a><i class="fas fa-cog"></i>Settings</a></li>
        //                </ul>
