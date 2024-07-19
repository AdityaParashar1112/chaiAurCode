const express = require('express');
const dotenv = require('dotenv');
dotenv.config();





const app = express();


const data = {
    "login":"ap@taketwotechnologies.com",
    "Password":"adiadi12340@"
}


app.get('/',(req,res)=>
{
    res.send('Hey Get Call')
})

app.get('/data',(req,res)=>{
    res.json(data);})

const PORT = process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})