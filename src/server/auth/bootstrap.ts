import { createUser } from "@/server/repositories/users";
import prisma from "@/server/db/client";
import { generateSalt, hashPassword } from "@/server/auth/password";

export async function ensureAdminSeed() {
  try {
    const count = await prisma.user.count();
    if (count > 0) return;
  } catch (e: unknown) {
    // Prisma P2021: table does not exist — migrations not applied yet.
    const code =
      typeof e === "object" && e !== null && "code" in e
        ? (e as { code?: string }).code
        : undefined;
    if (code === "P2021") return;
    throw e;
  }
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;
  const salt = generateSalt();
  const passwordHash = hashPassword(password, salt);
  await createUser({ email, name: "Admin", passwordHash, passwordSalt: salt, role: "admin" });
}
