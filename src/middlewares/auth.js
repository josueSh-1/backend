import 'dotenv/config'

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verificar si se envió el token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Guardamos los datos del usuario en req.user
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};