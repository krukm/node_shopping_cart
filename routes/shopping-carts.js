'use strict';

const express = require('express');
const shoppingCarts = express.Router();

const cartItems = [
    {
        id: 1,
        product: 'comic book',
        price: 10,
        quantity: 3
    },
    {
        id: 2,
        product: 'action figure',
        price: 15,
        quantity: 2
    },
    {
        id: 3,
        product: 'video game',
        price: 70,
        quantity: 1
    },
    {
        id: 4,
        product: 'candy bar',
        price: 2,
        quantity: 5
    }
]

shoppingCarts.post('/shopping-cart', (req, res)=> {
    console.log('POST request made');
    console.log(req.body);
});

shoppingCarts.get('/shopping-cart', (req, res) => {
    console.log('GET request made');
    res.send(cartItems);
});

shoppingCarts.put('/shopping-cart', (req, res) => {
    console.log('PUT request made');
    console.log(req.params.id + ' ' + req.body);
});

shoppingCarts.delete('/shopping-cart', (req, res) => {
    console.log('DELETE resquest made');
    console.log(req.params.id + ' ' + req.body);
});

module.exports = shoppingCarts;