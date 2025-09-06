import { cookies } from "next/headers";
import crypto from "node:crypto";
import { createSession, getSessionById, deleteSession } from "@/server/repositories/sessions";
import { getUserById } from "@/server/repositories/users";

const SESSION_COOKIE = "session";

export async function startSession(userId: number, maxAgeDays = Number(process.env.SESSION_MAX_AGE_DAYS ?? 7)) {
  const id = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + maxAgeDays * 24 * 60 * 60 * 1000);
  await createSession({ id, userId, expiresAt });
  const c = await cookies();
  c.set(SESSION_COOKIE, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function getCurrentUser() {
  const c = await cookies();
  const id = c.get(SESSION_COOKIE)?.value;
  if (!id) return null;
  const session = await getSessionById(id);
  if (!session) return null;
  if (session.expiresAt.getTime() < Date.now()) {
    await endSession();
    return null;
  }
  return getUserById(session.userId);
}

export async function endSession() {
  const c = await cookies();
  const id = c.get(SESSION_COOKIE)?.value;
  if (id) {
    try { await deleteSession(id); } catch {}
  }
  c.set(SESSION_COOKIE, "", { path: "/", expires: new Date(0) });
}

