const nodemailer = require("nodemailer");

exports.sendNewEmail = async (email, name = 'Not specified', description , attachements = 'Not specified') => {
   let transporter = nodemailer.createTransport({
      name : process.env.EMAIL_HOST ,
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
         user: process.env.EMAIL_USER, 
         pass: process.env.EMAIL_PASSWORD,
      },
   });

   const mailOptions = {
      from: email,
      to: 'eouroboros2022@gmail.com',
      subject: "Eouroboros Client's email ",
      html: `<div style="padding:1rem 0;border-top:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>username: <b>${name}</b></span><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c"> <p><b>what client say's</b></p>
      ${description}</span></div></div>
      <div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c"> <span><b>Attachements:</b></span>
      ${attachements}</span></div>`,
   };

  return await transporter.sendMail(mailOptions);
  
};