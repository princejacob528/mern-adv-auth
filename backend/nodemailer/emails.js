import { transporter} from './nodemailer.config.js';
import dotenv from "dotenv";
import  { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmailNodemailer = async (email, verificationToken) => {
    
    try {
        const response = await transporter.sendMail({
            from: `PrinceDev Mailer <${process.env.SMTP_MAIL}>`,
            to:email,
            subject: "Verify your email",
            html:   VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email verification"
        })
        console.log("Verification email sent successfully ", response);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmailNodemailer = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: `PrinceDev Mailer <${process.env.SMTP_MAIL}>`,
            to: email,
            subject: "Welcome to",
            html:   WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
            category: "Welcome email"
        })
        console.log("Welcome email sent successfully ", response);
    } catch (error) {
        console.error("Error sending Welcome email:", error);
        throw new Error(`Error sending Welcome email: ${error}`);
    }
}

export const sendPasswordResetEmailNodemailer = async (email, resetURL) => {
    try {
        const response = await transporter.sendMail({
            from: `PrinceDev Mailer <${process.env.SMTP_MAIL}>`,
            to: email,
            subject: "Reset your password",
            html:   PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password reset"
        });
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmailNodemailer = async (email) => {
    try {
        const response = await transporter.sendMail({
            from: `PrinceDev Mailer <${process.env.SMTP_MAIL}>`,
            to: email,
            subject: "Password reset successful",
            html:   PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset"
        });
        console.log("Password reset successful email sent successfully ", response);
    } catch (error) {
        console.error("Error sending password reset successful email:", error);
        throw new Error(`Error sending password reset successful email: ${error}`);
    }
}