let allData = require('../data/data.json')

const selectAllData = () => {
    if(allData){
        return {error: null, data: allData}
    } else {
        return {error: {message: "Ocorreu um erro"}, data: null}
    }
}

const selectDataById = (id) => {
    const maravilhosaId = parseInt(id)
    const dadoEncontrado = allData.find(item => item.id === maravilhosaId)
    if (dadoEncontrado){
        return {error: null, data: dadoEncontrado}
    } else{
        return {error: {message:"Registro não encontrado na base"}, data: null}
    }
}

const insertData = (data) => {
    const maravilhosaFound = allData.find(maravilhosa => maravilhosa.name === data.name) // recupero o filme que foi criei no array de filmes      
    
    if (!data.id) {
        data.id = Math.random().toString(36).substr(-8)
    }
    
    if(maravilhosaFound) {
       return {error: {message: "Ops, registro duplicado"}} 
    } else {
        allData.push(data)
        return {error: null}
    }
}

const updateData = (id, dataToUpdate) => {
    const maravilhosaId = parseInt(id)
    const maravilhosaFound = allData.find(item => item.id === maravilhosaId) 
    const maravilhosaIndex = allData.indexOf(maravilhosaFound) 

    if (maravilhosaIndex >= 0) { 
        allData.splice(maravilhosaIndex, 1, dataToUpdate)

        return {error: null, data: selectDataById(id)}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder alterá-lo"}, data: null}
    }
}

const deleteData = (id) => {
    const maravilhosaId = parseInt(id)
    const maravilhosaFound = allData.find(item => item.id === maravilhosaId) 
    const maravilhosaIndex = allData.indexOf(maravilhosaFound) 

    if (maravilhosaIndex >= 0) { 
        allData.splice(maravilhosaIndex, 1)
        return {error: null}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder deletá-lo"}}
    }
}

module.exports = {
    selectAllData, 
    selectDataById, 
    insertData, 
    updateData, 
    deleteData
}