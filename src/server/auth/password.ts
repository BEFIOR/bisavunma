import crypto from "node:crypto";

export function generateSalt(bytes = 16): string {
  return crypto.randomBytes(bytes).toString("hex");
}

export function hashPassword(password: string, salt: string): string {
  const key = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return key.toString("hex");
}

export function verifyPassword(password: string, salt: string, expectedHash: string): boolean {
  const hash = hashPassword(password, salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(expectedHash, "hex"));
}

