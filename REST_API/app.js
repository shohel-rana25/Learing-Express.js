import express from 'express';
const app=express();

import cors from 'cors';
import bodyParser from 'body-parser';
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

import users from './model/user.model.js';


import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import users_router from './routes/user.route.js';

app.use('/users', users_router);

// home route
app.get('/', (req, res)=>{
   res.sendFile(path.join(__dirname,'views', 'index.html'));
})

// route not found
app.use((req, res, next)=>{
  res.status(404).json({
    meassage : 'route not found',
  })
})

//server error 

app.use((error, req, res, next)=>{
  res.status(500).json({
    meassage : 'server error',
  })
})


export default app;






