const express = require('express');
//files
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


const app = express();
app.use(express.json());
//Declaring the port you want your server to listen on
const port = 4001;


//endpoint that will send our array of products up to the client
app.get('/api/products', getProducts);

//endpoing with get method
app.get('/api/product/:id', getProduct);

//Invoking app.listen
app.listen( port, () => {console.log(`server running on port${port}`);});



