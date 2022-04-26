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
        /// Need to implement this method

        return null;
    }

    async register(email: string, password: string, wallet: string) : Promise<UserLoginDto | null>
    {
        /// Need to implement this method

        return null;
    }

    async login(email: string, password: string) : Promise<UserLoginDto | null>
    {
        /// Need to implement this method

        return null;
    }

    async update(email: string, password: string) : Promise<UserDataDto | null>
    {
        /// Need to implement this method

        return null;
    }

    async delete(id: string) : Promise<void>
    {
        /// Need to implement this method

        return;
    }

}