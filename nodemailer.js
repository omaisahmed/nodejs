var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: 'decentomais90@gmail.com',
    pass: '03101095316'
  }
});
var mailOptions = {
  from: 'decentomais90@gmail.com',
  to: 'decentomais90@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});