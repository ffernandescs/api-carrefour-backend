const api = require('./api')

const express = require('express')

const app = express()

const cors = require('cors')

const PORT = process.env.PORT || 8000

app.use(cors())


app.use(express.json())


app.get('/', (req, res) => {
    return res.send({message: 'Ola Mundo'})
})

app.get('/carrefour', async (req, res) => {
    try {
        const { data } = await api.get('')

        return res.json(data)
    } catch (error) {
        res.send({error: error.message})
        
    }
})





app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})