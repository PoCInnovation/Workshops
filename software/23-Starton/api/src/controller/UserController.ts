import express from 'express';
import UserData from '../data/UserData'
import checkBody from './checkBody'

const userData = new UserData();

export default class UserController {

    async getById(req: express.Request, res: express.Response) 
    {
        const { id } = req.params;

        if (id == undefined)
            return res.status(400).send("Bad request")
        if (id.length != 12 && id.length != 24)
            return res.status(400).send("Bad request")

        try {
            let user = userData.getById(id);

            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json('user_not_found');   
            }
        } catch (error) {
            return res.status(501).json(error);
        }
    }

    async login(req: express.Request, res: express.Response) 
    {
        /// Need to implement this method

      return null
    }

    async register(req: express.Request, res: express.Response)
    {
        const parsedBody = JSON.parse(JSON.stringify(req.body));
        let check = checkBody(parsedBody, ["email", "password", "wallet"])
        
        if (!check)
            return res.status(400).send("Bad request")

        try {
            let user = await userData.register(parsedBody.email,
            parsedBody.password, parsedBody.wallet);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(501).json(error);
        }
    }

    async update(req: express.Request, res: express.Response)
    {
        /// Need to implement this method

      return null
    }

    async delete(req: express.Request, res: express.Response)
    {
        /// Need to implement this method

      return null
    }
}