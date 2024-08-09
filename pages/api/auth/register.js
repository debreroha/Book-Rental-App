import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { email, password, role } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
    },
  });

  res.status(201).json(user);
}
