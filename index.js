//chamando as dependências instaladas no projeto
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routess = require('./config/routes')

const app = express();

//Defiunição de chamada das dependências 
app.use(morgan('dev'))//Logs de execução da aplicação
app.use(bodyParser.urlencoded({ extended: false }))//
app.use(express.json())//Determina o tipo de dado que queremos receber
app.use(cors())//Aqui definimos aonde será rodado a nossa aplicação, o que poderia ser em um dominio, esse Cors, sempre recebe uma propriedade
app.use(routess)


app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})