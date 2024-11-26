import express from 'express';
import UserRoutes from './routes/user.routes.js';
import { config } from 'dotenv';
import connectToDatabase from './config/dbConfig.js';
import cookieParser from 'cookie-parser';
import MovieRoutes from './routes/movie.routes.js';
import ShowRoutes from './routes/show.routes.js';
import cors from 'cors';
config();

 
const app = express();
app.use(cors()); 
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));


app.use('/static', express.static('public'));

app.use('/api/user', UserRoutes);
app.use('/api/movie', MovieRoutes);
app.use('/api/show', ShowRoutes);


app.get('/ping', (req, res) => {
    res.status(400).send('Page not found!');
})

app.listen(5050, async() => {
    await connectToDatabase();
    console.log("Server is running on http://localhost:5050");
})


