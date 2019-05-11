import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function isLoggedIn(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

  try {
    const decoded = await jwt.verify(token, process.env.SALT);
    const { id, phoneNumber } = decoded;
    req.userId = id;
    req.phoneNumber = phoneNumber;

    return next();
  } catch (e) {
    return res.status(401).json({
      message: 'User not logged in',
      e,
    });
  }
}

export function x(a) {
  console.log(a);
}
