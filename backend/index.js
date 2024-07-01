import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, MONGODBURL } from './config.js';
import bookRoute from './routes/booksRoute.js';
import orderRoute from './routes/ordersRoute.js';
import LoginRoute from './routes/loginRoute.js';
import registerRoute from './routes/registerRoute.js';
import feedbackRoute from './routes/feedbackRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    return response.status(200).send('welcome');
});

app.use('/books', bookRoute);
app.use('/orders', orderRoute);
app.use ('/logins',LoginRoute);
app.use('/registers', registerRoute);
app.use('/feedbacks',feedbackRoute );

mongoose.connect(MONGODBURL)
    .then(() => {
        console.log('app is connected to db');
        app.listen(PORT, () => {
            console.log(`app is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
