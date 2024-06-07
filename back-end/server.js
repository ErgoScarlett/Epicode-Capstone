import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
config();
import registerRouter from './routes/register.routes.js';
import loginRouter from './routes/login.routes.js';
import profileRouter from './routes/profile.routes.js';
import endpoints from 'express-list-endpoints';


const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', registerRouter);
server.use('/api/auth', loginRouter);
server.use('/api/auth', profileRouter);


const initServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); 
    console.log('Successful connection to MongoDB database');

    server.listen(process.env.PORT || 3001, () => {
      console.log(`Server listening on port ${process.env.PORT || 3001}`);
      console.log('Available endpoints:');
      console.table(endpoints(server));
    });
  } catch (error) {
    console.error('Error connecting to MongoDB database:', error);
  }
};

initServer();
