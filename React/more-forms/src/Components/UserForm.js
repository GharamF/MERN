import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


const UserForm = props => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confrim_pass, setConfrim_pass] = useState("");
    const [errors, setErrors] = useState({});

    const setuser = (e) => {
        e.preventDefault();
        const user = { firstname, lastname, email, password, Confrim_pass };
        props.setUser(user);
        setFirstname('');
        setlastname('');
        setEmail('');
        setPassword('');
        setConfrim_pass('');
    }

    const lastnameErrors = (e) => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = 'Name is Required!'
        }
        else if (value.length < 2) {
            message = "Name Must Be 2  characters or longer!"
        }
        setErrors({ ...errors, lastname: message });
    }

    const firstnameError = (e) => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = 'Name is Required!'
        }
        else if (value.length < 2) {
            message = "Name Must Be 2  characters or longer!"
        }
        setErrors({ ...errors, firstname: message });
    }


    const EmailErrors = (e) => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = 'Email is Required!'
        }
        else if (value.length < 2) {
            message = "Email Must Be 2  characters or longer!"
        }
        setErrors({ ...errors, email: message });
    }

    const passwordError = (e) => {
        let value = e.target.value;
        let message = "";
        if (value === Confrim_pass) {
            if (!value) {
                message = 'password is Required!'
            }
            else if (value.length < 8) {
                message = "Password must be at least 8 charecter "
            }
        } else message = " Password dont match"

        setErrors({ ...errors, password: message });
    }


    const Confrim_passError = (e) => {
        let value = e.target.value;
        let message = "";
        if (value === password) {
            if (!value) {
                message = 'password is Required!'
            }
            else if (value.length < 8) {
                message = "Password must be at least 8 charecter "
            }

        } else message = " Password dont match"

        setErrors({ ...errors, Confrim_pass: message });
    }

    return (

            <form onSubmit={setuser} >
                <div className="container">
                    <div className="jumbotron bg-light text-dark">
                        <div className="form-group col-md-6">
                            <label>First Name: </label>
                            <input onChange={e => setFirstname(e.target.value)} onBlur={firstnameError} value={firstname} type="text" className="form-control" name="firstname" />
                            <p className="bg-danger text-white">{errors.firstname}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label>last Name: </label>
                            <input onChange={e => setlastname(e.target.value)} onBlur={lastnameErrors} value={lastname} type="text" className="form-control" name="lastname" />
                            <p className="bg-danger text-white">{errors.lastname}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email Address: </label>
                            <input onChange={e => setEmail(e.target.value)} onBlur={EmailErrors} value={email} type="email" className="form-control" name="email" />
                            <p className="bg-danger text-white">{errors.email}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password: </label>
                            <input onChange={e => setPassword(e.target.value)} onBlur={passwordError} value={password} type="password" className="form-control" name="password" />
                            <p className="bg-danger text-white">{errors.password}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label> Confrim Password: </label>
                            <input onChange={e => setConfrim_pass(e.target.value)} onBlur={Confrim_passError} value={Confrim_pass} type="password" className="form-control" name="Confrim_pass" />
                            <p className="bg-danger text-white">{errors.Confrim_pass}</p>
                        </div> 
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </div>
            </form >
       
    )
}

export default UserForm; 