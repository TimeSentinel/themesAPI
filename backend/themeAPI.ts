/* ---------------------------------------
backend/dbSetup/productAPItest.ts
PROJECT: productsAPI;

(c) 2025 Lance Stubblefield 
--------------------------------------- */

const express = require("express");
const app = express()
const port = 3002
const productQueries = require("./ThemeQueries.tsx")

app.use(express.json())
app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});


// -------------------------------------------- GET --------------------------------------------

// --------------- PRODUCTS ---------------
app.get('/themes', (req, res) => {
    productQueries.getThemes()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
// --------------- CATEGORIES ---------------
app.get('/theme:id', (req, res) => {
    productQueries.getThemeById(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

// --------------- SUBCATEGORIES ---------------
app.get('/subcats', (req, res) => {
    productQueries.listSubcats()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})


// #############################################################################################



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})