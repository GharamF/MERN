import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setdescription] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
        navigate("/product");
    }

    return (
        <div>
            {loaded && (
                <>
                    <div>
                        <div className="container">
                            <div className="jumbotron jumbotron-fluid">
                                <h1>Update a Product</h1>
                                <form onSubmit={updateProduct}>
                                    <p>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Title</label>
                                            <div className="col-sm-5">
                                                <input className="form-control" type="text" placeholder="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Price</label>
                                            <div className="col-sm-5">
                                                <input className="form-control" type="number" placeholder="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">description</label>
                                            <div className="col-sm-5">
                                                <input className="form-control" type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                                            </div>
                                        </div>
                                    </p>
                                    <button type="submit" className="btn btn-primary">submit</button>
                                </form>        
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};