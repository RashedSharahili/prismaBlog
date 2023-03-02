import express,{Application, Request, Response} from 'express';
import { connectDB } from './config/db';
import userRouter from './routes/user.route'
import blogeRouter from './routes/blog.route'
const app:Application = express();
import * as dotenv from 'dotenv'
dotenv.config()
let port = process.env.PORT || 3003;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/blogs', blogeRouter);

var multer = require('multer');
var upload = multer();
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.listen(port,()=>console.log(`express started on port ${port}`));