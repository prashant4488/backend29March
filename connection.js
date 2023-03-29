const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE)
.then(()=>{
 console.log("Datbase connected successfully")
})
.catch(error=>console.log(error))