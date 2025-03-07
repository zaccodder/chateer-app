import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  senderId: mongoose.Types.ObjectId; // Reference to the sender
  receiverId: mongoose.Types.ObjectId; // Reference to the receiver
  content: string; // Message content
  image: string;
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>('Message', MessageSchema);
