const mongoose = require('mongoose')

const connection_string = process.env.connection_string

mongoose.connect(connection_string).then((res)=>{
    console.log("Mongoose Atlas conncetion with pfServer");
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
})