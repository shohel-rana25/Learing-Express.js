import app from './app.js';


app.get('/', (req, res)=>{
  res.send('its work');
})

app.listen(2512, ()=>{
    console.log('rest api is running')
})
