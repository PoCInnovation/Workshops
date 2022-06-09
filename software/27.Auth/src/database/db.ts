import mongoose from 'mongoose'
import { DB_URL } from '../config/config'

mongoose.connect(`${DB_URL}`)
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
