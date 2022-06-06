import express from "express";
import exphbs from "express-handlebars";
import indexRouter from "./routes/index.routes.js";
import path from "path";
import bodyParser from "body-parser";


import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join( __dirname, "views"));

app.engine(".hbs", exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
}));

app.set("view engine", ".hbs");


//rutas
app.use(indexRouter);

export default app;