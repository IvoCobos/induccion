import 'dotenv/config';
import app from './app.js';
import mongoose from 'mongoose';

app.listen(3000);
console.log('server on port', 3000);

//DB connection
console.log(process.env.MONGODB_URI);
mongoose
    .connect(process.env.MONGODB_URI,{useNewUrlParser: true}, () => {
        console.log("Conectado a MongoBD");
    })