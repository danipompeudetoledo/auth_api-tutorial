const express = require('express');
const app = express();
const authRoute = require('./routes/auth')
const mongoose = require ('mongoose');


//Connect to the DB
mongoose.connect('mongodb+srv://danspfc21:danspfc21@cluster0.fn5feyn.mongodb.net/authDB?retryWrites=true&w=majority',
    { useNewUrlParser: true },
     ()=> console.log('Connected to db'))

//Middleware 
app.use(express.json())
//Route midleware
app.use('/api/user', authRoute )

app.listen(3000, () => console.log('Server is running'));