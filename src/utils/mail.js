import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Project Management Platform",
            link: "https://www.example.com/",
        }
    })
    const emailTextual = mailGenerator.generatePlaintext(options.MailgenContent);
    const emailHTML = mailGenerator.generate(options.MailgenContent);

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    });

    const mail = {
        from: "mail.projectManager@example.com",
        to: options.to,
        subject: options.subject,
        text: emailTextual,
        html: emailHTML
    }

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

const emailVerificationMailgenContent = (userName, verificationUrl) => {
    return {
        body: {
            name: userName,
            intro: "Welcome to our App! We're excited to have you on board.",
            action: {
                instructions: "To verify your email address, please click the button below:",
                button: {
                    color: "#22BC66', // Optional action button color",
                    text: "Confirm your email",
                    link: verificationUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }
}

const forgotPasswordMailgenContent = (userName, passwordResetUrl) => {
    return {
        body: {
            name: userName,
            intro: "We got a request to reset your password. If you did not make this request, please ignore this email.",
            action: {
                instructions: "To reset your password, please click the button below:",
                button: {
                    color: "#22BC66', // Optional action button color",
                    text: "Reset your password",
                    link: passwordResetUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }
}

export { emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail };