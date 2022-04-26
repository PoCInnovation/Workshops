import mongoose from "mongoose";
import { NftShemaDto } from "./dto/NftShemaDto";

const Schema = mongoose.Schema;

const NftShema = new Schema<NftShemaDto>({
    userId: {
        type     : String,
        trim     : true,
        required : [true, 'User id is mandatory'],
        unique   : true,
        lowercase: true
    },
    contractId: {
        type: String,
        trim: true,
        required : [true, 'contract is mandatory']
    },
    nfts: {
        type: [String],
        trim: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('NftShema', NftShema);