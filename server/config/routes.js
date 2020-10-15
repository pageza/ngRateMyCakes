// Requiring mongoose for funcationality
const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const cake = require('../controllers/Cakes');
const path = require('path')


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/cakes', (req, res) => {
        cake.allCakes(req,res)
    });

    app.get('/cakes/:id', (req, res) => {
        cake.oneCake(req,res)
    });

    app.post('/cakes', (req, res) => {
        cake.createCake(req,res)
    });

    app.put('/cakes/:id', (req, res) => {
        cake.reviewCake(req,res)
    });

    app.delete('/cakes/:id', (req, res) => {
        cake.destroyCake(req,res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}
