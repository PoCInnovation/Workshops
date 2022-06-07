import express from 'express';
import router from './routes/routes';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { PORT } from './config/config';
import './database/db'

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Express is listening at http://localhost:${PORT}`);
}); 