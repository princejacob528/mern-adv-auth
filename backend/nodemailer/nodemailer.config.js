import expressAsyncHandler from 'express-async-handler';
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();



export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  