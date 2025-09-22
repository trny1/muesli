const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get((err, req, res) => {
    if (err) {
        res.status(404).send('<h1>404 Not Found</h1>')
    } else {
        res.status(200)
    }
})

const PORT = 3333
app.listen(PORT, ()=>{
    console.log(`Node express backend server is running on http://localhost:${PORT}`)
})