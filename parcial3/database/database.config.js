const mongoose = require('mongoose');
const urlConnection = "mongodb+srv://admin:admin@cluster0.aif9hr5.mongodb.net"

const dbConnection = async()=>{
    try{
        mongoose.connect(urlConnection,{
            autoIndex:true
        })
        console.log('Database Online')
    }catch(error){
        console.log(error)
        throw new Error ('error al conectar en la Database');
    }
}

module.exports = {dbConnection}