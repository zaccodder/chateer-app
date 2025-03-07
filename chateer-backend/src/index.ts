import { createServer } from 'http';
import { Server } from 'socket.io';
import { PORT, MONGODB_URI } from './config/config';
import app from './app';
import connectToDb from '../src/db/connect'; // connection to the database

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const startSerer = () => {
  connectToDb(MONGODB_URI)
    .then(() => {
      httpServer.listen(PORT, () => {
        console.log('Database connected successfully');
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error connecting to the database:', error.message);
      }
    });
};

startSerer();
