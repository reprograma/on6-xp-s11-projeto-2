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


//insertData

//updateData

//deleteData

module.exports = {selectAllData, selectDataById}