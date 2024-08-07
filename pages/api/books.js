import { prisma } from '../../../lib/prisma';
import { signToken } from '../../../utils/auth';

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (user && user.password === password) {
    const token = signToken({ id: user.id, email: user.email, role: user.role });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

export default login