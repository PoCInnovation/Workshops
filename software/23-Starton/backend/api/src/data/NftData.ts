import { NftShemaDto } from "../models/dto/NftShemaDto";
import { NftDataDto } from "./dto/NftDataDto";

const NftShema = require('../models/NftShema');
const dotenv = require("dotenv")

dotenv.config();

export default class UserData {
    
    async getByUserId(userId: string) : Promise<NftDataDto | null>
    {   
        /// Need to implement this method

        return null;
    }

    async create(userId: string, contractId: string) : Promise<NftDataDto | null>
    {
        /// Need to implement this method

        return null;
    }

    async updateNft(userId: string, nft: string) : Promise<NftDataDto | null>
    {
       /// Need to implement this method

       return null;
    }
}