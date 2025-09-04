import mysql, { Pool, PoolOptions } from "mysql2/promise";

type GlobalWithDb = typeof globalThis & {
  __mysqlPool?: Pool;
};

const g = globalThis as GlobalWithDb;

function getPoolOptions(): PoolOptions {
  const port = process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306;
  return {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || process.env.MYSQL_DB || "bisavunma",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60_000,
    queueLimit: 0,
    // Keep date handling simple; adjust to your needs
    decimalNumbers: true,
    charset: "utf8mb4_general_ci",
  };
}

export function getDb(): Pool {
  if (!g.__mysqlPool) {
    g.__mysqlPool = mysql.createPool(getPoolOptions());
  }
  return g.__mysqlPool;
}

export async function closeDb(): Promise<void> {
  if (g.__mysqlPool) {
    await g.__mysqlPool.end();
    g.__mysqlPool = undefined;
  }
}

