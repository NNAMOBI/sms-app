const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./config/db')
const PORT = process.env.PORT || 6200



const app = express();
// process.env.PORT is responsible for searching out on heroku environment the PORT no ,hence default to local PORT 5000
// const PORT = process.env.PORT || 4500;

//connect database;
connectDb();

//init middleware to parse the object of data into the req.body
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('API running')
// });

// Define routes

app.use('/api/celeb', require('./config/routes/api/users'))

// app.post('/api/todo', (req, res) => {
//     const data = req.body;
//     res.json(data)
// })
app.listen(PORT, (error) => {
    if (error) {
        console.log('error in connection')
    } else {
        console.log(`port ${PORT} is up and running`)
    }
})

