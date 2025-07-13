import express from 'express';
const app =express();
import userRouter from './routes/userroute.js';

import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname,'views', 'index.html'));
})

app.use(userRouter);

app.use((req, res, next)=>{
    res.status(404).json({
        meassage : 'not found this page ',
    })
});

app.listen(2512, ()=>{
    console.log('server is running now');
})

