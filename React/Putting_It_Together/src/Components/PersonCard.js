import React, { Component } from 'react';


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.person.age
        }
    }

        Age = e => {
            this.setState({age: this.state.age+1});
        }


        render() {
            return (
                <div  className="container">
                       <div className="jumbotron bg-light text-dark">
                    <h1> {this.props.person.lastname},{this.props.person.firstName} </h1>
                    <p> Age : {this.state.age} </p>
                    <p> Hair Color : {this.props.person.hairColor} </p>
                    <button type="button" class="btn btn-info" onClick={this.Age}> BirthDay button {this.props.person.firstName} {this.props.person.lastname}  </button>
                    </div>
                </div>
            )
        }
    }


export default Person;