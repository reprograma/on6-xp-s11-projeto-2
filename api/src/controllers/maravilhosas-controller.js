const model = require('../models/maravilhosas-models')

const getMaravilhosas =  (req,res) => {
    const { error, data } = model.selectAllData()
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(400).json({"message": error.message});
    }
}

//getMaravilhosaById
const getMaravilhosaById =  (req,res) => {
    const { error, data } = model.selectDataById(req.params.id)
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(404).json({"message": error.message});
    }
}

//addMaravilhosa 
const addMaravilhosa = (req,res) => {

    const {error} = model.insertData(req.body)
    if(error === null) {

        res.status(201).json("Registro adicionado com sucesso");
    } else {
        res.status(400).json({"message": error.message})
    }
}
//updateMaravilhosa 
const updateMaravilhosa = (req, res) => {
    const maravilhosaId = req.params.id
    const maravilhosaToUpdate = req.body 
    const {error, data} = model.updateData(maravilhosaId, maravilhosaToUpdate )
     if(error=== null) {
         res.status(201).send(data)
    } else {
        res.status(404).json({"message": error.message})
     }
    
}

//deleteMaravilhosa

module.exports = {getMaravilhosas, getMaravilhosaById, addMaravilhosa, updateMaravilhosa}