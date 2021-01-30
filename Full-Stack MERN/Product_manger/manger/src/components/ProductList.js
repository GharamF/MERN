import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';

export default props => {
    const { removeProduct } = props;
    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/product/' + productID)
            .then(res => {
                removeProduct(productID)
            })
    }


    return (    
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                {props.products.map((product, index) => {
                    return <h3 key={index}>
                    <a href={"/product/" + product._id} > {product.title}   </a>  
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button> </h3>
                })}
                
            </div>
        </div>
    )
}
