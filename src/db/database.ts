import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prismaConnection = new PrismaClient();
