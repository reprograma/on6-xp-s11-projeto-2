let allData = require('../data/data.json')

const selectAllData = () => {
    if(allData){
        return {error: null, data: allData}
    } else {
        return {error: {message: "Ocorreu um erro"}, data: null}
    }
}

const selectDataById = (id) => {
    const dadoEncontrado = allData.find(item => item.id === id)
    if (dadoEncontrado){
        return {error: null, data: dadoEncontrado}
    } else{
        return {error: {message:"Registro não encontrado na base"}, data: null}
    }
}

const insertData = (data) => {
    if (!data.id) {
        data.id = Math.random().toString(36).substr(-8)
    }
    const maravilhosaFound = allData.find(maravilhosa => maravilhosa.name === data.name) // recupero o filme que foi criei no array de filmes      
    if(maravilhosaFound) {
       return {error: {message: "Ops, registro duplicado"}} 
    } else {
        allData.push(data)
        return {error: null}
    }

}

//updateData

//deleteData

module.exports = {selectAllData, selectDataById, insertData}