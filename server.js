import express from 'express'
import route from  './routes/route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const PORT= process.env.PORT || 3000
const app = express()


console.log(process.env.MONGODB)
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log("connected to Mongoose"))
    .catch((err)=>console.log(err));

app.use(express.json())
app.use(express.urlencoded())// pour décoder l'url si non le body ne se lit pas

app.use(route)

app.listen(PORT,()=> {console.log(`server listening on PORT:${PORT}`)})