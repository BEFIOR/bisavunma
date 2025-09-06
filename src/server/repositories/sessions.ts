import prisma from "@/server/db/client";

export async function getSessionById(id: string) {
  return prisma.session.findUnique({ where: { id } });
}

export async function createSession(params: { id: string; userId: number; expiresAt: Date; }) {
  return prisma.session.create({
    data: {
      id: params.id,
      userId: params.userId,
      expiresAt: params.expiresAt,
    },
  });
}

export async function deleteSession(id: string) {
  return prisma.session.delete({ where: { id } });
}

export async function deleteSessionsByUserId(userId: number) {
  return prisma.session.deleteMany({ where: { userId } });
}

