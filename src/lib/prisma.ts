import { PrismaClient } from "@prisma/client";

declare global {
  let prisma: PrismaClient | undefined;
}

export const db = (globalThis as any).prisma || new PrismaClient();

