import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
const PersonCard = props => {
    return(
        <div className="container">
              <div className="jumbotron bg-light text-dark">
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p></div>
        </div>
    );
}
export default PersonCard;
