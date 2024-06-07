import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'macey.gerlach@ethereal.email',
      pass: '95hECWG3fGd22CCtr2'
  },
  tls: {
    rejectUnauthorized: false 
  }
});


export const sendConfirmationEmail = async (email, name, username, password) => {
  try {
    const mailOptions = {
      from: '"Epicode Capstone" <macey.gerlach@ethereal.email>',
      to: email,
      subject: 'Confirm registration',
      html: `
        <h1>Thank you for registering, ${name}!</h1>
        <h2>Your registration has been successfully completed!</h2>
        <h4>Keep your login details so you can log in to the game 
        platform as soon as it becomes available. 
        And remember not to reveal this data to anyone</h4>
        <h4>Username: ${username}</h4>
        <h4>Password: ${password}</h4>
        <p>Greetings from the team of Epicode Capstone</p>      
        `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email di conferma inviata con successo');
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di conferma:', error);
  }
};

