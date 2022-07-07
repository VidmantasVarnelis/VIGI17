const nomailer = require('nodemailer');
const { getAllEmails, saveEmail } = require('../model/email');

const getAllEmailsController = async (req, res) => {
  try {
    const emails = await getAllEmails();
    res.render('index');
  } catch (err) {
    res.render('404');
  }
};

const getEmailFormController = (req, res) => {
  res.render('post-email');
};

const postEmailController = (req, res) => {
  const { to, subject, description } = req.body;
  const transporter = nomailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'testavimas225@gmail.com',
      pass: 'udlgxrathczfmngj',
    },
  });

  const mailOptions = {
    from: 'testavimas225@gmail.com',
    to,
    subject,
    text: description,
  };

  transporter.sendMail(mailOptions, async (err, info) => {
    if (err) {
      console.log(err);
    } else {
      const email = await saveEmail(subject, description);
      console.log('Email response', info.response);
      res.redirect('/');
    }
  });
};

module.exports = {
  getAllEmailsController,
  postEmailController,
  getEmailFormController,
};
