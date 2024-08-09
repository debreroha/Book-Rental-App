import prisma from '@/prisma/lib/prisma';

export default async function handler(req, res) {
  const { category, author, owner } = req.query;

  const books = await prisma.book.findMany({
    where: {
      category: category || undefined,
      author: author || undefined,
      ownerId: owner || undefined,
    },
  });

  res.status(200).json(books);
}
