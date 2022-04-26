import express from 'express';
import axios from 'axios'
import dotenv from 'dotenv'
import FormData from 'form-data';
import checkBody from './checkBody'
import UserData from '../data/UserData';
import NftData from '../data/NftData'
import { NftUpload } from './dto/NftControllerDto'

dotenv.config();

const { STARTON_API_KEY } = process.env
const http: any = axios.create(
  {
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": `${STARTON_API_KEY}`,  
    },
  }
)
const userData = new UserData();
const nftData = new NftData();

class NftController {

    async getUserNft(req: express.Request, res: express.Response): Promise<express.Response>
    {
        /// Need to implement this method

        return null
    }

    async uploadImage(nftUpload: NftUpload) : Promise<string | null>
    {
        /// Need to implement this method

        return null
    }

    async uploadMetadata(nftUpload: NftUpload, imgCid: string) : Promise<string | null>
    {
        /// Need to implement this method

        return null
    }

    async mintNft(nftUpload: NftUpload, metadataCid: string) : Promise<JSON | null>
    {
        /// Need to implement this method

        return null
    }

    async uploadNft(req: express.Request, res: express.Response) : Promise<express.Response>
    {
        /// need to implement this method

        return null;
    }

}

export default NftController;