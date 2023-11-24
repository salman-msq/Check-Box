import express from 'express';
import apiRoute, { apiProtected } from './src/routes/api.js';
import mongoose from 'mongoose';
import { DB_CONNECT } from './src/utils/constants.js';
import AuthMiddleware from './src/middlewares/AuthMiddleware.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(DB_CONNECT, {
    //useNewUrlParse: true,
});


app.use('/api/', apiRoute);
app.use('/api/', AuthMiddleware, apiProtected);

const PORT = 7000;
app.listen(PORT, () => console.log('Server Started'));
