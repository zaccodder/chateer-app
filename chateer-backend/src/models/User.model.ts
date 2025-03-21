import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  id: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  sentMessages: mongoose.Schema.Types.ObjectId[]; // Array of sent messages
  receivedMessages: mongoose.Schema.Types.ObjectId[]; // Array of received messages
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sentMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    receivedMessages: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    ],
    profilePic: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

mongoose.set('toJSON', {
  transform: (doc, ret: { [key: string]: string }) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
    return ret;
  },
});

export default mongoose.model<IUser>('User', UserSchema);
