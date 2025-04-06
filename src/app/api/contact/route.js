// src/app/api/contact/route.js
import dotenv from 'dotenv'
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

dotenv.config()

export async function POST(req) {
  try {
    // Parse the incoming request JSON
    const { name, number, email, description } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Compose the email message
    const mailOptions = {
      from:email, 
      to: process.env.EMAIL_USERNAME,  
      subject: `Contact Form Submission: ${name}`, 
      text: `
        You have a new contact form submission:

        Name: ${name}
        Email: ${email}
        Phone Number: ${number}
        Message: ${description}
      `,
      html: `
        <h3>You have a new contact form submission:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone Number:</strong> ${number}</li>
          <li><strong>Message:</strong> ${description}</li>
        </ul>
      `,
    };

    const mailOptionsforSender = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Thank You for Contacting Tech Hungers',
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Tech Hungers. 
          We appreciate your interest and the time you took to get in touch. 
          Your message is important to us, and we will contact you soon to address your inquiry.</p>
          <p>Best regards,<br>The Tech Hungers Team</p>
        `,
      };
      

    // Send the email using the transporter
     transporter.sendMail(mailOptions);
     transporter.sendMail(mailOptionsforSender);

    // Respond back to the client with a success message
    return NextResponse.json({ success: 'Message received and email sent!' }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}

