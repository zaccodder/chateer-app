import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || 'hell';
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'hello';

export { MONGODB_URI, PORT, JWT_SECRET };
