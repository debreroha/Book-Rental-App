import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
