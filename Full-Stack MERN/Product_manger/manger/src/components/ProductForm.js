import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState  } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";




export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setdescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {console.log(res)})
            .catch(err => console.log(err))
    navigate("/product");
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <p>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-5">
                                <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>
                    </p>
                    <p>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-5">
                                <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                    </p>
                    <p>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">description</label>
                            <div className="col-sm-5">
                                <input className="form-control" type="text" onChange={(e) => setdescription(e.target.value)} />
                            </div>
                        </div>
                    </p>
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
            </div>
        </form>
    )
}
