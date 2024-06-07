import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import { config } from 'dotenv';
config();

const loginRouter = express.Router();

loginRouter.post('/login', async (req, res) => {
    
  const { loginCredential, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email: loginCredential }, { username: loginCredential }] });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default loginRouter;
