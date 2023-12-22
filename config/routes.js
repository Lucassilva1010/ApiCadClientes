const express = require('express')
const routes = express.Router()

//Simulação de um arquivo Json 
let db = [
    { '1': { Nome: 'Lucas', Idade: '34' } },
    { '2': { Nome: 'Anastacia', Idade: '23' } },
    { '3': { Nome: 'Antonella', Idade: '4' } },
    { '4': { Nome: 'Marina', Idade: '4' } }
]


//Utilização do metodos de HTTP
//metodos de busca nos arquivos Json, ele apenas retorna os valores, e o /  sginifica que está retornando os valores padrões
routes.get('/', (req, res) => {
    return res.json(db)
})



routes.post('/add', (req, res) => {
    const body = req.body;
    if (!body) {

        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})


routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })
    db = newDB

    return res.send(newDB)
})

module.exports = routes
