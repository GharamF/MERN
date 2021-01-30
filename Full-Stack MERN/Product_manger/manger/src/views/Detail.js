import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setproduct(res.data))
    }, [])
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <h1>  {product.title} </h1>
                <p>price: {product.price}</p>
                <p>description: {product.description}</p>                
                <Link to={"/" + product._id + "/edit"}>Edit</Link>
            </div>
        </div>
    )
}
