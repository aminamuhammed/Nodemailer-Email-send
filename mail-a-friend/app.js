var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aminamuhammed0786@gmail.com',
    pass: 'apov ddqg nqjm wqhf'
  }
});

var mailOptions = {
  from: 'aminamuhammed0786@gmail.com',
  to: 'aminamuhammed0922@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello! This is an Email send using Nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});