import { Request, Response } from 'express';
import Message from '../models/Message.model';
import User from '../models/User.model';
import { messageSchema } from '../utils/messageSchema';
import cloudinary from '../config/cloudinary';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const sendMessage = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const receiverId = req.params.id;
  const senderId = req.user?.id;

  if (!senderId) {
    throw new Error('Unauthorized');
  }
  const validatedData = messageSchema.parse(req.body);

  validatedData.senderId = senderId;
  validatedData.receiverId = receiverId;

  if (validatedData.image) {
    // Validate image URL
    const url = new URL(validatedData.image);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('Invalid Image URL');
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
};
export const getMessages = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const receiverId = req.params.id;
  const senderId = req.user?.id;

  if (!senderId) {
    throw new Error('Unauthorized');
  }

  const messages = await Message.find({
    $or: [
      { senderId: senderId, receiverId: receiverId },
      { senderId: receiverId, receiverId: senderId },
    ],
  }).populate('sender receiver', 'username email');

  res.status(200).json(messages);
};

export const getUsersForSidebar = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const loggedUserId = req.user?.id;

  if (!loggedUserId) {
    throw new Error('Unauthorized');
  }
  const users = await User.find({
    _id: {
      $ne: loggedUserId,
    },
  });
  res.status(200).json(users);
};
