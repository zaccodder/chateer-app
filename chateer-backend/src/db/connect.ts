import mongoose from 'mongoose';

const dbConnect = async (url: string) => mongoose.connect(url);

export default dbConnect;
