'use strict';

const express = require('express');
const app = express();
const port = 8080;

const shoppingCarts = require('./routes/shopping-carts');

app.use(express.json());
app.use('/', shoppingCarts);
app.use(express.static('./public'));


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});