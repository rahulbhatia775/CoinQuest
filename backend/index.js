import express from "express";
import {createServer} from "http";
import  {Server} from "socket.io";
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT ;
const app = express();
const httpServer = createServer(app) ;
const io = new Server(httpServer , { 
    cors :{
        origin : process.env.FRONTEND_DOMAIN
    }
});

io.on("connection" , (socket)=>{
    //..
})

httpServer.listen(PORT);