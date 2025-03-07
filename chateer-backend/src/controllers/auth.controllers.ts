import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { loginSchema, registerSchema } from '../utils/userSchema';
import { ZodError } from 'zod';
import { loginUser, registerUser } from '../services/auth.services';
import User from '../models/User.model';
import cloudinary from '../config/cloudinary';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }
    const user = await registerUser(validatedData);

    res.status(201).json(user);
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const token = await loginUser(validatedData);
    if (!token) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
    res.status(200).json({ token, user: decodedToken });
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

export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { profilePic } = registerSchema.parse(req.body);
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    if (!profilePic) {
      res.status(400).json({ message: 'Profile picture is required' });
      return;
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
      { new: true }
    );
    res.status(200).json(user);
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
