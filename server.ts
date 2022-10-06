import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
const port = process.env.PORT || 4001;

app.use(cookieParser());
app.use(express.json());
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to Mongoose');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongoose:');
        console.log(err.message);
    });

import userRouter from './server/router/userRouter';
app.use('/api/users', userRouter);
import articleRouter from './server/router/articleRouter';
app.use('/api/articles', articleRouter);

app.use(express.static('./client/build'));
app.use('/*', express.static('./client/build'));

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
