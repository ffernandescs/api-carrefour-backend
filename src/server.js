const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())


const PORT = process.env.PORT || 8000 


// Ira passar informação da loja para pagina inicial, a mesma ja recebe o valor do frontEnd


// Ira passar informação da Cep para pagina inicial, a mesma ja recebe o valor do frontEnd

app.get('/home', async(req, res) => {
    const cepStorage = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=50740080`)
    return res.json(data)
})

// Ira passar informação da loja para pagina Lojas, a mesma ja recebe o valor do frontEnd




app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

