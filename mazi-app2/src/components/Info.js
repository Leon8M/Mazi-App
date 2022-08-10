/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import ImageIcon from '../images/image.jpg'

export default function Info(props) {
    return (
        <div className="card">
            <div className="beside">
            <img src={ImageIcon} className="card--image" alt="Image" />
            <select className="edit">
                <option></option>
                <option>Edit</option>
                <option>Delete</option>
            </select>
            </div>
            <div className="info">
                <p className="bold">{props.name}</p>
                <p className="green">{props.position}</p>
               
            </div>
             <span className="gray">{props.email}</span>
            <p className="gray">{props.phone}</p>
            <p id="gray">Vehicle  reg.  no;</p>
            <p id="gray">{props.reg}</p>
        </div>
    )
}