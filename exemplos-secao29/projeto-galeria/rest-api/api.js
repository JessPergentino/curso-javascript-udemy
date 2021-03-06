const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const api = express()
const port = 3000

const router = express.Router()

const galeriaRouter = require('./router/galeriaRouter')

api.use(cors())

api.use(bodyparser.urlencoded({ extended: true }))
api.use(bodyparser.json({ limit: '20mb', extended: true }))

//Torna publica a pasta public
api.use('/public', express.static( __dirname + 'public'))

router.get('/', (req, resp) => {
    resp.json({
        message: 'API Online...'
    })
})

api.use('/', router)
api.use('/galeria', galeriaRouter)

api.listen(port)
console.log('Run API Express')

