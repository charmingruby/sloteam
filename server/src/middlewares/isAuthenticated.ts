import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string,
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  console.log(process.env.JWT_SECRET
  );

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as PayLoad;
    next();
  } catch (error) {
    return res.status(401).end();
  }
}
