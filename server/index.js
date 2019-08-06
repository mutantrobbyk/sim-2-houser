require('dotenv').config()
const massive = require('massive')
const express = require('express')
const ctrl = require('./controller')
const app = express()
const PORT = 5000
const {CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/houses',ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`Powerman ${PORT}`))
})



