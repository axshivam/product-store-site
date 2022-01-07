import express, {Application, Response, Request} from 'express';
import path from 'path';
const cors = require('cors');
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import routes from './routes';
const app: Application = express();
const port:number = 5000;


app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());
// Setting up use files for views directory
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server Running at Port ${port}`);
});
