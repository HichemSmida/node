const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hichemsmida18@gmail.com',
    pass: '******'
  }
});


const mailOptions = {
  from: 'hichemsmida18@gmail.com',
  to: 'hichemsmida18@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
