import React from 'react';
import "./custom.css";


const Card = (props) =>{
    return(
        <div>
            <div className="card">
                <img src={props.image} alt="Avatar" style={{width:'100%'}}/>
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.department}</p>
                    <p>{props.children}</p>

                </div>
            </div>
        </div>
    )
}
export default Card