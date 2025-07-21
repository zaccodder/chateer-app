import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string(),
  username: z.string().min(3).max(20),
  email: z.email().min(5).max(50),
  password: z.string().min(6).max(20),
});

export const loginSchema = z.object({
  email: z.email().min(5).max(50),
  password: z.string().min(6).max(20),
});
