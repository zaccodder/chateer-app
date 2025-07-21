import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route';
import messageRouter from './routes/message.route';
import errorMiddleware from './middlewares/errorhandler.middleware';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/messages', messageRouter);

// error handling middleware
app.use(errorMiddleware);

export default app;
