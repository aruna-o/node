const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
    Initialize the Database connection
*/

async function connect() {
    try {
        await mongoose.connect(process.env.URI);
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error);
    }
}

connect();

/* 
    APIs
*/

app.get('/', (req, res) => {
    res.send({
        name: 'aruna',
        age: 21,
        role: "Front End developer",
    })
})

/*
    Initialize the Node.js server
*/

app.listen(process.env.PORT, () => {
    console.log('Node server is started');
})