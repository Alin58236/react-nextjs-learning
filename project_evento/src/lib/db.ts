import { PrismaClient } from "@prisma/client";

const prosmaClientSingleton = () => {
    return new PrismaClient();
}

type PrismaClientSingleton = ReturnType<typeof prosmaClientSingleton>;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClientSingleton | undefined };

const prisma = globalForPrisma.prisma || prosmaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;