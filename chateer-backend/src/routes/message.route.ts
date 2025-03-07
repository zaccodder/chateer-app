import express from 'express';
import {
  sendMessage,
  getUsersForSidebar,
  getMessages,
} from '../controllers/message.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/:receiverId', authMiddleware, sendMessage);
router.get('/:receiverId', authMiddleware, getMessages);
router.get('/users', authMiddleware, getUsersForSidebar);

export default router;
