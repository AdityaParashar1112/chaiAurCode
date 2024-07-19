const express = require('express');
const dotenv = require('dotenv');
dotenv.config();





const app = express();



app.get('/',(req,res)=>
{
    res.send('Hey Get Call')
})

const PORT = process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})