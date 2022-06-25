
const axios = require('axios')


const api = axios.create({
    baseURL: 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq='
})

module.exports = api