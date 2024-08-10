// src/pages/api/auth/login.js
import prisma from '@/prisma/lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // If user does not exist
      return res.status(200).json({ success: false, message: 'Email not found' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // If password is incorrect
      return res.status(200).json({ success: false, message: 'Invalid password' });
    }

    // If email and password are correct
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
