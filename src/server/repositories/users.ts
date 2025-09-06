import prisma from "@/server/db/client";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(params: {
  email: string;
  name?: string | null;
  passwordHash: string;
  passwordSalt: string;
  role?: string;
}) {
  return prisma.user.create({
    data: {
      email: params.email,
      name: params.name ?? null,
      passwordHash: params.passwordHash,
      passwordSalt: params.passwordSalt,
      role: params.role ?? "admin",
    },
  });
}

