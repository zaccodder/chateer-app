import { Request, Response, NextFunction } from 'express';
import Message from '../models/Message.model';
import User from '../models/User.model';
import { messageSchema } from '../utils/messageSchema';
import cloudinary from '../config/cloudinary';
import { ZodError } from 'zod';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const sendMessage = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user?.id;

    if (!senderId) {
      res.status(401).json({ msg: 'Unauthorized' });
      return;
    }
    const validatedData = messageSchema.parse(req.body);

    validatedData.senderId = senderId;
    validatedData.receiverId = receiverId;

    if (validatedData.image) {
      // Validate image URL
      const url = new URL(validatedData.image);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        res.status(400).json({ msg: 'Invalid image URL' });
        return;
      }
      const uploadResponse = await cloudinary.uploader.upload(
        validatedData.image
      );
      validatedData.image = uploadResponse.secure_url;
    }
    const message = await Message.create(validatedData);
    await message.save();
    // realtime chat happens here
    res.status(201).json(message);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      res.status(400).json({ errors: formattedErrors });
      return;
    }
    next(error);
  }
};
export const getMessages = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user?.id;

    if (!senderId) {
      res.status(401).json({ msg: 'Unauthorized' });
      return;
    }

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).populate('sender receiver', 'username email');

    res.status(200).json(messages);
  } catch (error: unknown) {
    next(error);
  }
};

export const getUsersForSidebar = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const loggedUserId = req.user?.id;

    if (!loggedUserId) {
      res.status(401).json({ msg: 'Unauthorized' });
      return;
    }
    const users = await User.find({
      _id: {
        $ne: loggedUserId,
      },
    });
    res.status(200).json(users);
  } catch (error: unknown) {
    next(error);
  }
};
