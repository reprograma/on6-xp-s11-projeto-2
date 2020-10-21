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
    const id = parseInt(req.params.id)
    const { error, data } = model.selectDataById(id)
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(404).json({"message": error.message});
    }
}

//addMaravilhosa 

//updateMaravilhosa 

//deleteMaravilhosa

module.exports = {getMaravilhosas, getMaravilhosaById}