import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const UserForm = props => {
    const {input, setInputs}= props;
    
    const onChange= (event)=>{
        setInputs({
            ...input,
            [event.target.name]: event.target.value });
        };
    return (
        <form>
            <div className="container">
                <div className="jumbotron bg-light text-dark">
                    <div className="form-group col-md-6">
                        <label>First Name: </label>
                        <input onChange={onChange}  type="text" className="form-control" name="firstname" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>last Name: </label>
                        <input onChange={onChange}  type="text" className="form-control" name="lastname"  />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email Address: </label>
                        <input  onChange={onChange}  type="email" className="form-control" name="email"  />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Password: </label>
                        <input  onChange={onChange}  type="password" className="form-control" name="password"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label> Confrim Password: </label>
                        <input onChange={onChange} type="password" className="form-control" name="Confrim_pass"/>
                    </div>
                  
                </div>
            </div>
        </form>
    );
};
export default UserForm;