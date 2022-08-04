const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

const propertyRoute = require('./routes/property')
app.use(cors());
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/' , propertyRoute)

app.use((req,res)=>{
    res.send('404 not found')
})

mongoose.connect('mongodb+srv://jainshubh0612:shubhjain@cluster0.mti3b7l.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then((res)=>{
    console.info('Successfully connected')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000 ,()=>{
    console.log('Server Started at port number 3000')
})