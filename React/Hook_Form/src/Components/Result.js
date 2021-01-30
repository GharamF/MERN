import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'

const Result = props => {
    const {firstname , lastname , email , password , Confrim_pass} = props.data ; 
    return (
        <div className="container" >
            <div className="jumbotron bg-light text-dark">
            <h1> Your Form Data  </h1>
            <p> Name :  {firstname} {lastname} </p>
            <p> Email : {email} </p>
            <p> Password : {password} </p>
            <p> Password : {Confrim_pass} </p>
            </div>
        </div>    
    )
}

export default Result ;