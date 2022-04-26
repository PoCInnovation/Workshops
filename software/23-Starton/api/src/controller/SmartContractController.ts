import express from 'express';
import axios from 'axios'
import dotenv from 'dotenv'
import checkBody from './checkBody'
import UserData from '../data/UserData';
import NftData from '../data/NftData'
import { IpfsNftContract } from './dto/SmartContractControllerDto'

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
const userData = new UserData()
const nftData = new NftData()

class SmartContractController {

    async createContractLevelMetadata(contract: IpfsNftContract): Promise<string | null> 
    {
      /// Need to implement this method

      return null
    }

    async createIpfsNftContract(contract: IpfsNftContract, uriSufix: string): Promise<string | null>
    {
      /// Need to implement this method

      return null
    }

    async postIpfsNftContract(req: express.Request, res: express.Response) : Promise<express.Response>
    {
      const parsedBody = JSON.parse(JSON.stringify(req.body));
      const check = checkBody(parsedBody, ['userId', 'dashboardName', 'name', 'metadataName', 'description'])
      
      if (!check)
        return res.status(400).send("Bad request");

      let user = await userData.getById(parsedBody.userId);
      
      if (!user?.wallet) {
        return res.status(404).send("User not found");
      }

      const contract: IpfsNftContract = {
        userId: parsedBody.userId,
        dashboardName: parsedBody.dashboardName,
        name: parsedBody.name,
        metadataName: parsedBody.metadataName,
        description: parsedBody.description,
        wallet: user.wallet
      }


      const uriSufix = await this.createContractLevelMetadata(contract)
      let contractId: string | null = null;
      
      if (uriSufix != null)
        contractId = await this.createIpfsNftContract(contract, uriSufix)
      if (contractId != null) {
        console.log(contractId)
        await nftData.create(user._id, contractId)
        return res.status(201).send("Created");
      }
      return res.status(500).send("Internal server error");
    }
}

export default SmartContractController;