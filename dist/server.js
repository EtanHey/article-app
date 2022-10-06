"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
const MONGODB_URI = process.env.MONGODB_URI;
const app = express_1.default();
const port = process.env.PORT || 4001;
require('dotenv').config();
app.use(express_1.default.static('client/build'));
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log('connected to Mongoose');
})
    .catch((err) => {
    console.log('Failed to connect to Mongoose:');
    console.log(err.message);
});
const userRouter_1 = __importDefault(require("./server/router/userRouter"));
const articleRouter_1 = __importDefault(require("./server/router/articleRouter"));
app.use('/api/users', userRouter_1.default);
app.use('/api/articles', articleRouter_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
