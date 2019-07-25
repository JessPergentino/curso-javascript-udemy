const express = require('express')
const router = express.Router()
const GaleriaModel = require('../model/galeria/GaleriaModel')
const RespostaClass = require('../model/RespostaClass')

const fs = require('fs')
const folderPublic = './public/imagens/'

router.get('/', (req, resp, next) => {
    GaleriaModel.getAll((err, res) => {
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

router.get('/:id?', (req, resp, next) => {
    GaleriaModel.getId(req.params.id, (err, res) => {
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

router.post('/?', (req, resp, next) => {
    let response = new RespostaClass()

    if (req.body.dados_imagem != null) {
        //Salvar a imagem
        let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64')
        let dateCurrent = new Date().toLocaleString()
            .replace(/\//g, '')
            .replace(/:/g, '')
            .replace(/-/g, '')
            .replace(/ /g, '')

        let pathImage = folderPublic + dateCurrent + req.body.dados_imagem.nome_arquivo

        fs.writeFileSync(pathImage, bitmap)
        req.body.caminho = pathImage

        GaleriaModel.add(req.body, (err, res) => {
            if (err) {
                response.error = true
                response.msg = "Occurred an Error"
            } else {
                if (res.rowCount > 0) {
                    response.msg = 'Successful registration'
                } else {
                    response.error = true
                    response.msg = "Unable to perform operation"
                }
            }
            console.log('resp:', response)
            resp.json(response)
        })
    } else {
        response.error = true
        response.msg = 'An Image Has Not Been Sent'
        console.log('error: ', response.msg)
        resp.json(response)
    }

})
module.exports = router

