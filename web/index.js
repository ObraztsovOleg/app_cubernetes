import { Server } from 'http';
import express from 'express';
import m from 'mongoose';
import appSrc from './app.js'
import CORS from './CORS.js'
import NumberModel from './models/Number.js'
import bodyParser from 'body-parser'
import process from 'process';

const url = process.env.MONGO_URL;
console.log(url);
const Num = NumberModel(m);
const app = appSrc(express, bodyParser, CORS, Num);

const PORT = 4321;

try {
  await m.connect(url, {useNewUrlParser: true,
    useUnifiedTopology: true });

  Server(app).listen(PORT); 
} catch(e) {
  console.log(e.codeName);
}