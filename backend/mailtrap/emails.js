import { mailtrapClient, sender } from "./mailtrap.config.js";
import  { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmailMailtrap = async (email, verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
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

export const sendWelcomeEmailMailtrap = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "4c2e73aa-c54e-4f82-9932-bee48b8d0dc3",
            template_variables: {
                "company_info_name": "PrinceDev.co",
                "name": name
              }
        })
        console.log("Welcome email sent successfully ", response);
    } catch (error) {
        console.error("Error sending Welcome email:", error);
        throw new Error(`Error sending Welcome email: ${error}`);
    }
}

export const sendPasswordResetEmailMailtrap = async (email, resetURL) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html:   PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password reset"
        });
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmailMailtrap = async (email) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
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