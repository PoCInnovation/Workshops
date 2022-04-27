import { UserShemaDto } from "../models/dto/UserShemaDto";
import { UserDataDto, UserLoginDto } from "./dto/UserDataDto";

const UserShema = require('../models/UserShema');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config();

export default class UserData {
    
    async getById(id: string) : Promise<UserDataDto | null>
    {
        try {
            let user = await UserShema.findById(id);

            return user   
        } catch (error) {
            console.log(error)
        }
        return null;
    }

    async register(email: string, password: string, wallet: string) : Promise<UserLoginDto | null>
    {
        const temp: Object = {
            email: email,
            password : password,
            wallet : wallet
        }

        try {
            let user = await UserShema.create(temp);

            if (user != null) {
                const payload = {
                    user: {
                        id: user._id
                    }
                };
                const userLoginDto: UserLoginDto = {
                    _id: user._id,
                    token: jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '18000s' })
                }
                return userLoginDto
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }

    async login(email: string, password: string) : Promise<UserLoginDto | null>
    {
        const temp: Object = {
            email: email,
            password : password
        }

        try {
            let user = await UserShema.findOne({ email: email });
            let isGoodPassword = false;

            if (user != null) {
                isGoodPassword = await bcrypt.compare(password, user.password);
                if (isGoodPassword) {
                    const payload = {
                        user: {
                            id: user._id
                        }
                    };
                    const userLoginDto: UserLoginDto = {
                        _id: user._id,
                        token: jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '18000s' })
                    }
                    return userLoginDto
                }
            }
            
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async update(email: string, password: string) : Promise<UserDataDto | null>
    {
        const temp: Object = {
            email    : email,
            password : password
        }

        try {
            let user = await UserShema.findOne({ email: email });

            if (user)
                await user.save(temp);
            
            return user;   
        } catch (error) {
            console.log(error)
        }
        return null;
    }

    async delete(id: string) : Promise<void>
    {
        try {
            await UserShema.deleteOne({ _id: id });   
        } catch (error) {
            console.log(error)
        }
        return;
    }

}