let database = require('../data/data.json')

const selectAllData = () => {
    return database
}

const selectDataById = (id) => {
    
    return database.find(item => item.id == id)

}

const insertData = (data) => {
   
    database.push(data)
}

const updateData = (id, body) =>{
    
    const data = database.map(item => item.id == id)
    const newData = {id, ...body}
    const update = database.splice(data, 1, newData)
    return update
}

const deleteData = (id) => {
    const dataFilter = database.filter(item => item.id == id)[0]

    const index = database.indexOf(dataFilter)

    return database.splice(index, 1)
}


module.exports = { 
    selectAllData,
    selectDataById,
    insertData,
    updateData, 
    deleteData
}