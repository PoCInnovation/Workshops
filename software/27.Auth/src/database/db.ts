import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27018/test')
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
