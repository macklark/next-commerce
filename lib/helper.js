import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllProducts() {
  const products = await prisma.product.findMany();

  return products;
}

export async function getProductById(id) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return product;
}
