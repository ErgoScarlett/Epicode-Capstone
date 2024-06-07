import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users.js';
import { sendConfirmationEmail } from './email.Service.js';

const registerRouter = express.Router();

registerRouter.post('/register', async (req, res) => {
  const { name, surname, dateOfBirth, continent, username, email, password } = req.body;

  try {
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'The name is required' });
    }

    if (!surname || !surname.trim()) {
      return res.status(400).json({ error: 'The surname is required' });
    }

    if (!dateOfBirth || isNaN(new Date(dateOfBirth).getTime())) {
      return res.status(400).json({ error: 'The date of birth is invalid' });
    }
     const validContinents = ['Oceania', 'Asia', 'Europe', 'North America', 'South America'];
    if (!continent || !validContinents.includes(continent)) {
      return res.status(400).json({ error: 'The selected continent is invalid' });
    }

    if (!username || !username.trim() || username.trim().length < 3 || username.trim().length > 30) {
      return res.status(400).json({ error: 'The username must be between 3 and 30 characters in length' });
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    if (!password || password.trim().length < 8) {
      return res.status(400).json({ error: 'The password must have a minimum length of 8 characters' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      dateOfBirth,
      continent,
      username,
      email,
      password: hashedPassword
    });


    await newUser.save();
    await sendConfirmationEmail(email, name, username, password);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {

    res.status(500).json({ error: 'Error during registration' });
  }
});

export default registerRouter;

