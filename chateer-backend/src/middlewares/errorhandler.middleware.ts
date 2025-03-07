import { ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';
const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error.message);

  if (error instanceof ZodError) {
    res.status(400).send({ error: error.issues });
    return;
  } else if (error.name === 'CastError') {
    res.status(400).json({ msg: 'Invalid id or missing' });
    return;
  } else if (error.name === 'JsonWebTokenError') {
    res.status(400).json({ msg: error.message });
    return;
  } else if (error.name === 'TokenExpiredError') {
    res.status(400).json({ error: error.message });
    return;
  }
  next(error);
};

export default errorMiddleware;
