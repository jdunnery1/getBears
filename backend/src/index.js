import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
import {connectDB} from "./lib/db.js";
import bearRoute from "./routes/bear.route.js";
import path from "path";

dotenv.config()

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json())
app.use(cors())

app.use('/api/bears', bearRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'../frontend/dist/index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    connectDB()
})