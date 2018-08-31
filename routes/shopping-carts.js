'use strict';

const express = require('express');
const cartItems = express.Router();
const pool = require('../connection');

let getQuery = 'select * from ShoppingCart order by id';
let insertQuery = 'insert into ShoppingCart (product, price, quantity) values($1::text, $2::real, $3::int)';
let updateQuery = 'update ShoppingCart set quantity = $1::int where id = $2::int';
let deleteQuery ='delete from ShoppingCart where id = $1::int';

cartItems.get('/shopping-cart', (req, res) => {
    console.log('GET request made');
    pool.query(getQuery).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        res.send('500 server ' + err);
    });
});

cartItems.post('/shopping-cart', (req, res) => {
    console.log('POST request made');
    pool.query(insertQuery, [req.body.product, req.body.price, req.body.quantity])
    .then(() => {
        pool.query(getQuery).then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.send('500 server ' + err);
        
        });
    });
});

cartItems.put('/shopping-cart/:id', (req, res) => {
    console.log('PUT request made');
    pool.query(updateQuery, [req.body.quantity, parseInt(req.params.id)])
        .then(() => {
            pool.query(getQuery).then((result) => {
                res.send(result.rows);
            }).catch((err) => {
                res.send('500 server ' + err);
            });
        });
});

cartItems.delete('/shopping-cart/:id', (req, res) => {
    console.log('DELETE resquest made');
    pool.query(deleteQuery, [parseInt(req.params.id)])
        .then(() => {
            pool.query(getQuery).then((result) => {
                res.send(result.rows);
            }).catch((err) => {
                res.send('500 server ' + err);
            });
        });
});

module.exports = cartItems;