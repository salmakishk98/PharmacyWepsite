const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/pharmacy",{useNewUrlParser:true,useUnifiedTopology: true, useCreateIndex: true})
.then(()=> console.log("connected"))
.catch(()=>console.log("error"))
