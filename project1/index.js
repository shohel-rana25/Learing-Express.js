import express  from 'express';
const app=express();
import router from './routes/route.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import config from './config/config.js';

const PORT = config.app.port;
connectDB(); // MongoDB connect


import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.use(cors());
app.use(express.json()); //body parser json data req.body
app.use(express.urlencoded({extended:true})); // form thaka data catch korar jonno
app.use('/', router); // all router


app.get('/', (req, res)=>{
   res.sendFile(path.join(__dirname, 'views','home.html'));
})


app.listen(PORT, ()=>{
    console.log(`server ok : ${PORT}`);
});