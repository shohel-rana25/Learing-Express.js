import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT || 2512 ;


import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


// app.use(express.static(path.join(__dirname, 'public')));

app.get('/image/p.png', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'image', 'p1.png'));
})

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname,'public','home.html'));
});


app.listen(port, ()=>{
    console.log('server is run');
})