import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  iat: number,
  exp: number,
  sub: string,
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const decodedToken = verify(
      token,
      process.env.JWT_SECRET
    ) as PayLoad;

    const { sub } = decodedToken;

    req.user = {
      id: sub
    };

    next();
  } catch (error) {
    return res.status(401).end();
  }
}
