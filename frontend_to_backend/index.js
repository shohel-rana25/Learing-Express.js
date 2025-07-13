import express from 'express';
// import app from './app.js';
const port=2512;
import bodyParser from 'body-parser';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const app=express();

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/register', (req, res)=>{
    res.sendFile(path.join( __dirname, 'register.html'));
})

app.post('/register', (req, res)=>{
   const fullname=req.body.fullname;
   res.send(`<h1>name is : ${fullname}</h1>`);
})



app.listen(port , ()=>{
  console.log('server is running');
});
