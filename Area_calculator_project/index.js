import express from 'express';

const app=express();
const port=2512;

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname,'index.html'));
})


app.get('/tringle', (req, res)=>{
     res.sendFile(path.join(__dirname,'tringle.html'));
})

app.get('/circle', (req, res)=>{
     res.sendFile(path.join(__dirname,'circle.html'));
})


app.post('/tringle', (req, res)=>{
     const base =parseFloat(req.body.base);
     const hight =parseFloat( req.body.hight);
     
     if(isNaN(base)  || isNaN(hight))
     {
            return res.send('<h1>Please enter a valid base and hight</h1>');
     }

     const area=0.5*base*hight;
     res.send(`<h1>Area of tringle is : ${area.toFixed(3)}</h1>`);
})

app.post('/circle', (req, res)=>{

     const radious =parseFloat( req.body.radious);
     if(isNaN(radious))
     {
            return res.send('<h1>Please enter a valid number for radius</h1>');
     }
     const area=Math.PI*radious*radious;
     res.send(`<h1>Area of circle is : ${area.toFixed(3)}</h1>`);
})

app.listen(port, ()=>{
     console.log('server is running ');
})

   