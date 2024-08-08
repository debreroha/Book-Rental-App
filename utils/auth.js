import jwt from 'jsonwebtoken';

const secret = "12345"

export const signToken = (payload) => {
  return jwt.sign(payload, secret.toString('utf-8'), { algorithm: 'HS256', allowInsecureKeySizes: true, allowInvalidAsymmetricKeyTypes: true }, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
