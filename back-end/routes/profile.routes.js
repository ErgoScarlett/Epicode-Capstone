import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid authentication' });
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userId = req.userId; 

    const user = await User.findById(userId);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user data' });
  }
});

export default router;

