const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors({
    origin: ['api-carrefour.herokuapp.com']
}))

const PORT = process.env.PORT || 4567 

// Ira passar informação da loja para pagina inicial, a mesma ja recebe o valor do frontEnd

app.get('/carrefour', async(req, res) => {
    const lojaProxima = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${lojaProxima}`)

    return res.send(data)
})

// Ira passar informação da Cep para pagina inicial, a mesma ja recebe o valor do frontEnd



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

