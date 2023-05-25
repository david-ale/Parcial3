const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.DB_CONNECTION,{
            autoIndex:true
        })
        console.log('Database Online')
    }catch(error){
        console.log(error)
        throw new Error ('error al conectar en la Database');
    }
}

module.exports = {dbConnection}