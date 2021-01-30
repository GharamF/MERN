import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setproducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(responde => {
                setproducts(responde.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const removeProduct = productID => {
        setproducts(products.filter(products => products._id != productID));
    }
    return (
        <div>
            <ProductForm />
            <hr/>
           {loaded && <ProductList products={products} removeProduct={removeProduct}/>}
        </div>
    )
}
