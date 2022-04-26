import mongoose from "mongoose";
import  { UserShemaDto } from "./dto/UserShemaDto"

const Schema   = mongoose.Schema;
const bcrypt   = require('bcryptjs');

const UserShema = new Schema<UserShemaDto>({
    email: {
        type     : String,
        trim     : true,
        required : [true, 'email is mandatory'],
        unique   : true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required : [true, 'password is mandatory']
    },
    wallet: {
        type: String,
        trim: true,
        required : [true, 'wallet is mandatory']
    }
}, {
    timestamps: true
});

UserShema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model('UserShema', UserShema);