import { PrismaClient } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  __prisma?: PrismaClient;
};

const g = globalThis as GlobalWithPrisma;

function buildMySqlUrlFromEnv(): string | undefined {
  const host = process.env.MYSQL_HOST;
  const port = process.env.MYSQL_PORT || "3306";
  const user = process.env.MYSQL_USER;
  const pass = process.env.MYSQL_PASSWORD ?? "";
  const db = process.env.MYSQL_DATABASE || process.env.MYSQL_DB;
  
  if (!host || !user || !db) return undefined;
  
  const encodedPass = encodeURIComponent(pass);
  return `mysql://${user}:${encodedPass}@${host}:${port}/${db}?sslmode=require`;
}

const datasourceUrl = process.env.DATABASE_URL || buildMySqlUrlFromEnv();

export const prisma: PrismaClient =
  g.__prisma ||
  new PrismaClient(
    datasourceUrl
      ? {
          datasources: { db: { url: datasourceUrl } },
        }
      : undefined
  );

if (process.env.NODE_ENV !== "production") {
  g.__prisma = prisma;
}

export default prisma;

