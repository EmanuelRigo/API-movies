import "dotenv/config.js"
import morgan from "morgan"
import express from "express"
import pathHandler from "./src/middlewares/pathHandler.mid.js"
import errorHandler from "./src/middlewares/errorHandler.mid.js"


//server
const server = express()
const port = process.env.PORT
const ready = ()=> console.log("server ready on port:" + port)
server.listen(port, ready)

//middlewares
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(morgan("dev"))

//routers
//server.use(indexRouters)
server.use(errorHandler)
server.use(pathHandler)