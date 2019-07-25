const express = require('express')
const router = express.Router()
const GaleriaModel = require('../model/galeria/GaleriaModel')
const RespostaClass = require('../model/RespostaClass')

router.get('/', (req, resp, next) => {
    GaleriaModel.getTodos((err, res) => {
        let response = new RespostaClass()
        if (err) {
            response.error = true
            response.msg = "Occurred an Error"
        } else {
            response.data = res.rows
        }

        resp.json(response)
    })
})
module.exports = router

