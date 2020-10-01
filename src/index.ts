import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express'
import * as BodyParser from 'body-parser'
import routes from "./routes";
const app = express()
app.use(BodyParser.json())
createConnection()
app.use(routes)
app.listen(3333,()=>{
    console.log('rodando na porta 3333')
})
