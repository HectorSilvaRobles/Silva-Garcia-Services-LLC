let landscaping = require('./ServicesData/landScape.json')
let concrete = require('./ServicesData/concrete.json')
let wallwork = require('./ServicesData/wallwork.json')
let flooring = require('./ServicesData/flooring.json')
module.exports = {
    getLandscapingServices: (req, res, next) => {
        res.status(200).send(landscaping)
    },

    getConcreteServices: (req, res, next) => {
        res.status(200).send(concrete)
    },

    getWallWorkServices: (req, res, next) => {
        res.status(200).send(wallwork)
    },

    getFlooringServices: (req, res, next) => {
        res.status(200).send(flooring)
    }

    
}