import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const DB = process.env.DB!;
export const PORT = parseInt(process.env.PORT!);
export const JWT_KEY = process.env.JWT_KEY!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;

let testAccount = {
  user: "mupacauxp4mgw2mi@ethereal.email",
  pass: "eQVNHXGY9NFcWYzMWB",
};

export let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});
