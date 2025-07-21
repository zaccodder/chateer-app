import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { loginSchema, registerSchema } from '../utils/userSchema';
import { loginUser, registerUser } from '../services/auth.services';
import User from '../models/User.model';
import cloudinary from '../config/cloudinary';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const signup = async (req: Request, res: Response): Promise<void> => {
  const validatedData = registerSchema.parse(req.body);
  // check if user exists already in the dataase
  const existingUser = await User.findOne({ email: validatedData.email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // create the user
  const user = await registerUser(validatedData);
  res.status(201).json(user);
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const validatedData = loginSchema.parse(req.body);
  const token = await loginUser(validatedData);
  if (!token) {
    throw new Error('Invalid credentials');
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);

  res.status(200).json({ token, user: decodedToken });
};

export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { profilePic } = registerSchema.parse(req.body);
  const userId = req.user?.id;
  if (!userId) {
    throw new Error('Unauthorized');
  }

  if (!profilePic) {
    throw new Error('Profile picture is required');
  }

  const result = await cloudinary.uploader.upload(profilePic, {
    folder: 'chateer',
    width: 150,
    height: 150,
    crop: 'fill',
  });

  const updatedProfilePic = result.secure_url;

  const user = await User.findByIdAndUpdate(
    userId,
    { profilePic: updatedProfilePic },
    { new: true, runValidators: true, context: 'query' }
  );
  res.status(200).json(user);
};
