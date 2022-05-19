import { Server } from 'http';
import express from 'express';
import m from 'mongoose';
import appSrc from './app.js'
import CORS from './CORS.js'
import NumberModel from './models/Number.js'
import bodyParser from 'body-parser'

const url = process.env.URL;
const Num = NumberModel(m);
const app = appSrc(express, bodyParser, CORS, Num);

const PORT = 3000;

try {
  await m.connect(url, {useNewUrlParser: true,
    useUnifiedTopology: true });

  Server(app).listen(PORT); 
} catch(e) {
  console.log(e.codeName);
}