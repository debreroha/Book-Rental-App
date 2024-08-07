import jwt from 'jsonwebtoken';

const secret = "12345"

export const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
