import express from 'express';
import useRouter from './router/route.js';
const app=express();

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.use('', useRouter);

app.get('/register', (req, res)=>{
    // res.status(200).json({
    //     meassage : "i am shohel",
    //     statuscode:200,
    // })
    // // res.redirect('/login');
   
    res.statusCode =200;
    res.sendFile(__dirname+"/home.html");

})



app.use((req, res)=>{
  res.send('<h1>404 !!! not a valid server</h1>');
  res.end();
});

export default app;