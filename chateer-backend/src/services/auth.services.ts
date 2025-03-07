import { LoginInput, RegisterInput } from '../types';
import User from '../models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const registerUser = async (userData: RegisterInput) => {
  const { username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();

  return newUser;
};

export const loginUser = async (
  userData: LoginInput
): Promise<string | null> => {
  const { email, password } = userData;

  const user = await User.findOne({ email });
  if (!user) {
    return null;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return null;
  }

  const userForToken = {
    email: user.email,
    id: user._id,
    name: user.username,
    profilePic: user.profilePic,
  };

  const token = jwt.sign(userForToken, JWT_SECRET, {
    expiresIn: '7d',
  });

  return token;
};
