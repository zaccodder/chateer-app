import express from 'express';
import {
  sendMessage,
  getUsersForSidebar,
  getMessages,
} from '../controllers/message.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/send/:id', authMiddleware, sendMessage);
router.get('/:id', authMiddleware, getMessages);
router.get('/users', authMiddleware, getUsersForSidebar);

export default router;
