const express=require('express');
const app=express();
const mongoose= require('mongoose')
const dbURI='mongodb+srv://karim:test1234@karim.9cq8aes.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=> console.log('db connected'))
.catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
app.set('view engine','ejs');
app.listen(3000);
