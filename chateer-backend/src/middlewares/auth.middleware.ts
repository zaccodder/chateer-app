import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../config/config';
import User, { IUser } from '../models/User.model';

// Extend Request Type to Include `user`
interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization?.startsWith('Bearer ')) {
      res.status(401).json({ msg: 'No token provided' });
      return;
    }

    const token: string = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);

    if (typeof decodedToken === 'string') {
      res.status(401).json({ msg: 'Invalid token' });
      return;
    }

    const user = await User.findById(decodedToken.id).select('-password'); // Exclude password
    if (!user) {
      res.status(401).json({ msg: 'User not found' });
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    console.error('Auth Error:', error);
    res.status(401).json({ msg: 'Invalid or expired token' });
  }
};
