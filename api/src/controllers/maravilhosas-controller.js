const models = require('../models/maravilhosas-models')


//Nomes dos métodos para implementação:


// GET Maravilhosas
const getMaravilhosas = (req, res) => {
    const result = models.selectAllData()
        res.status(200).send(result)
}


// GET Maravilhosas by Id

const getMaravilhosaById = (req, res) => {
    const id = req.params.id
    const result = models.selectDataById(id)
    res.status(200).send(result)

}

// POST
const addMaravilhosa = (req, res) => {
    const body = req.body
    const result = models.insertData(body)
    res.status(201).send('Dado criado com sucesso!')
    res.status(201).send(result)

}


// PUT 
const updateMaravilhosa = (req, res) => {
    const id = req.params.id
    const body = req.body
    const result = models.updateData(id, body)

    res.status(200).send(result)
}

// DELETE
const deleteMaravilhosa = (req, res) => {
    const id = req.params.id
    const result = models.deleteData(id)
    res.status(202).send('Dado deletado com sucesso!')

}



module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}