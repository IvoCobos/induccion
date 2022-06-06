import 'dotenv/config';
import app from './app.js';
import mongoose from 'mongoose';
import Users from "./models/Users.js";

app.listen(3000);
console.log('server on port', 3000);

//DB connection
console.log(process.env.MONGODB_URI);
mongoose
    .connect(process.env.MONGODB_URI,{useNewUrlParser: true}, async () => {
        console.log("Conectado a MongoBD");
        await Users.create({
            name: 'Hugdddo',
            city: 'uio',
            select: true,
        });
    })