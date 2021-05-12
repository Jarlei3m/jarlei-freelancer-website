import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface MailDataProps {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log('my email:', process.env.DEV_EMAIL);
  if (
    req.method === 'POST' &&
    process.env.DEV_EMAIL &&
    process.env.DEV_PASSWORD
  ) {
    try {
      const transporter = nodemailer.createTransport({
        // port: 465,
        // host: 'smtp.gmail.com',
        service: 'Outlook365',
        auth: {
          user: process.env.DEV_EMAIL,
          pass: process.env.DEV_PASSWORD,
        },
        secure: true,
      });

      const mailData: MailDataProps = {
        from: process.env.DEV_EMAIL,
        to: 'jarlei_rodrigues@outlook.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `
          <div>
            <h1>Contact User Info</h1>
            <p> <strong>Client</strong>: ${req.body.name}</p>
            <p><strong>Email</strong>: ${req.body.email}</p>
            <p><strong>Phone Number</strong>: ${req.body.phone}</p>
            <p><strong>Message</strong>: ${req.body.message}</p>
          </div>
        `,
      };

      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          res.send('error' + JSON.stringify(err));
        } else {
          console.log('api info:', info);
          res.status(200).end();
        }
      });
    } catch (error) {
      res.status(error).json(`Error message: ${error}`);
    }
  } else {
    res.status(405);
    res.end();
  }
}
