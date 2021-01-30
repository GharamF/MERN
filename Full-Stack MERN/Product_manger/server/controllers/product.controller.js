const { request } = require('express');
const { Product } = require('../models/product.model');

module.exports.getAllProduct = (request, response) => {
    Product.find()
    .then(products => response.json(products))
    .catch(err => res.json(err));
}
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(Product => response.json(Product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request , response)=>{
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproduct => response.json(updatedproduct))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
