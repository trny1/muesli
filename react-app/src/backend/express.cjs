const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // TODO - credential
    database: 'test'
})



app.get('/mueslis', (req, res) => {
    //connection.connect(err => console.warn('connection error', err))
    //console.log('connection', connection)

    connection.query('SELECT id, name, price FROM mueslis', (error, result, fields) => {
        if (error) console.warn(error)
        if (result) {
            console.log(result)
            console.log(fields)

            res.status(200).json({error, result, fields})
        } else {
            res.status(403).json({error})
        }
    })
})

app.get((err, req, res) => {
    if (err) {
        res.status(404).send('<h1>404 Not Found</h1>')
    } else {
        res.sendStatus(200)
    }
})

const PORT = 3333
app.listen(PORT, ()=>{
    console.log(`Node express backend server is running on http://localhost:${PORT}`)
})