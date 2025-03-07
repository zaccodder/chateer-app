import { z } from 'zod';

// Define the message schema
export const messageSchema = z.object({
  senderId: z.string().optional(), // User ID of the sender
  receiverId: z.string().optional(), // User ID of the receiver
  image: z.string().optional(), // Image URL
  content: z.string().min(1, 'Message content is required'), // Message text
  createdAt: z.date().default(() => new Date()), // Timestamp for message creation
});

// Define a type from the schema (useful for TypeScript)
export type MessageInput = z.infer<typeof messageSchema>;
