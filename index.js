const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Daje Roma V2');
});






mongoose.connect('mongodb+srv://admin:asj7huq22du8say@backenddb.q7cl1pj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connesso al database!');
        app.listen(3200, () => {
            console.log('Il Server sta girando sulla porta 3200');
        });
    })
    .catch(() => {
        console.log("Connessione Fallita!");
    });