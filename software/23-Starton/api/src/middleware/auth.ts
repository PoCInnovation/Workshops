import { Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import UserData from '../data/UserData'
import dotenv from 'dotenv'

const userData = new UserData();

dotenv.config();

const { TOKEN_SECRET } = process.env;

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accessToken = req.header('accessToken');
      if (accessToken && TOKEN_SECRET != undefined) {
        const decoded = jwt.verify(accessToken, TOKEN_SECRET) as JwtPayload; 
        const user = await userData.getById(decoded.user.id);
        if (user != null) {
          next();
        } else {
          res.status(httpStatus.FORBIDDEN).send('User not found');
        }
      } else {
        res.status(httpStatus.FORBIDDEN).send('No accessToken provided');
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.status(httpStatus.FORBIDDEN).send('Invalid accessToken provided');
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to auth User: ' + error);
      }
    }
  };
};

export default auth;