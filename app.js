const express = require('express');
const app = express();

app.use("/products",(req, res, next) => {
    const data = [
        {"img":"https://i.imgur.com/nOFet9u.jpg",
        "name":"XRD Active Shoes",
        "price":"$1,999.99",
        "quantity":10}
        ]
    
    res.send((data));
});

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'API conectada'
    });
});



module.exports = app;