import { transporter } from "./mail.config.js";
import dotenv from "dotenv";
import {
  OTPEmailTemplate,
  WelcomeEmailTemplate,
  ForgotPasswordEmailTemplate,
  PasswordResetSuccessTemplate,
} from "./emailTemplates.js";
import { response } from "express";

dotenv.config();

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = email;
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Verify your email",
      html: OTPEmailTemplate.replace("{verificationCode}", verificationToken),
      category: "Email Verification",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error Sending verification email: ${error}`);
    throw new Error(`Error Sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = email;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Welcome to Prompt Debugger",
      html: WelcomeEmailTemplate.replace("{username}", name),
      category: "Welcome Email",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.log(`Error Sending welcome email: ${error}`);
    throw new Error(`Error Sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Reset your password",
      html: ForgotPasswordEmailTemplate.replace("[Reset Link]", resetURL),
      category: "Reset Password Email",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.log(`Error Sending welcome email: ${error}`);
    throw new Error(`Error Sending welcome email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email, loginURL) => {
  const recipient = email;
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Reset your password",
      html: PasswordResetSuccessTemplate.replace("[Login Link]", loginURL),
      category: "Reset Password Email",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.log(`Error Sending welcome email: ${error}`);
    throw new Error(`Error Sending welcome email: ${error}`);
  }
};

//   text: "Hello Welcome! This is a test email from my app.",
