// Example 1
// const express = require('express');

// import express from 'express';

// const app = express();


// app.all('*', (req, res) => {
//     res.status(200).send('Default Page!');
// })


// app.listen(5020, () => {
//     console.log('Server is running at http://localhost:5020');
// });


// Example 2
import express from 'express';
import UserRouter from './routes/user.routes.js'
import loggerMiddleware from './middleware/logger.js';
import connectToDB from './database/mongoDB.js';

const app = express();
app.use(express.json());

app.use(loggerMiddleware);


app.use('/api/user', UserRouter);


app.all('*', (req, res) => {
    res.status(200).send('Default Page!');
})


app.listen(5020, async () => {
    await connectToDB();
    console.log('Server is running at http://localhost:5020');
});


