import express from 'express';
import { signup, login, updateProfile } from '../controllers/auth.controllers';
import { authMiddleware } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('/sign-up', signup);
router.post('/log-in', login);
router.post('/updateProfile', authMiddleware, updateProfile);

export default router;
