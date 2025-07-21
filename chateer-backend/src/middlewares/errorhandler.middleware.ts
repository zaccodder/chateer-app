import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Safely log error message if available
  if (error && typeof error === 'object' && 'message' in error) {
    console.log((error as { message?: unknown }).message);
  } else {
    console.log(error);
  }

  if (error instanceof ZodError) {
    res.status(400).send({
      error: error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
    return;
  }
  if (error && typeof error === 'object' && 'name' in error) {
    const err = error as { name: string; message?: string };
    if (err.name === 'CastError') {
      res.status(400).json({ msg: 'Invalid id or missing ' });
      return;
    }
    if (err.name === 'JsonWebTokenError') {
      res.status(401).json({ msg: err.message });
      return;
    }
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ msg: err.message });
      return;
    }
  }
  if (error instanceof Error) {
    res.status(500).json({ msg: error.message });
    return;
  }
  next(error);
};

export default errorMiddleware;
