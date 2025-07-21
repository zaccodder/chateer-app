import { z } from 'zod';
import type { registerSchema, loginSchema } from './utils/schema';

export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;

export type AuthType = 'login' | 'signup';

export interface UserState {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    token: string;
  } | null;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  token: string;
}
