import { RequestHandler } from "express";
import createHttpError, { InternalServerError } from "http-errors";
import User from "../model/model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FRONTEND_URL, JWT_KEY, transporter } from "../config/config";
import nodemailer from "nodemailer";

export const signupUser: RequestHandler = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return next(createHttpError(422, "Email Already Exist!"));

        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({ name, email, password: hashedPassword });

        await user.save();

        res.json({ message: "User Created" });
    } catch (error) {
        return next(InternalServerError);
    }
};

export const signinUser: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return next(createHttpError(404, "User not Found!"));
        if (!user.isUserVerified)
            return next(createHttpError(406, "User not Verified"));

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword)
            return next(createHttpError(401, "Not Valid Password!"));

        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
                userId: user.id,
            },
            JWT_KEY,
            {
                expiresIn: "1d",
            }
        );
        res.cookie("jwt", token);
        res.json({ name: user.name, token });
    } catch (error) {
        return next(InternalServerError);
    }
};

export const sendVerificationMail: RequestHandler = async (req, res, next) => {
    const { email }: { email: string } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return next(createHttpError(404, "Email Not Valid!"));

        if (user.isUserVerified)
            return next(createHttpError(406, "User already verified"));

        const encryptedToken = await bcrypt.hash(user._id.toString(), 8);

        const jwtToken = jwt.sign({ userId: user._id }, JWT_KEY, {
            expiresIn: "60m",
        });
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "For Email Verification", // Subject line
            html: `Your Verification Link <a href="${FRONTEND_URL}/email-verify/${jwtToken}">Link</a>`, // html body
        });
        await user.updateOne({ $set: { verifyToken: encryptedToken } });
        res.json({
            message: `Preview URL: %s ${nodemailer.getTestMessageUrl(info)}`,
        });

    } catch (error) {
        res.json(error);
    }
};

export const verifyUserMail: RequestHandler = async (req, res, next) => {
    const { token }: { token: string } = req.body;

    try {
        const decodedToken: any = jwt.verify(token, JWT_KEY);

        const user = await User.findById(decodedToken.userId);
        if (!user) return next(createHttpError(401, "Token Invalid"));

        await user.updateOne({
            $set: { isUserVerified: true },
            $unset: { verifyToken: 0 },
        });

        res.json({ message: "Email Verified!" });
    } catch (error) {
        return next(createHttpError(401, "Token Invalid"));
    }
};