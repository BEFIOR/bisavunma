type Key = string;

declare global {
  var __loginAttempts: Map<Key, number[]> | undefined;
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5; // max invalid attempts per window

// Global in-memory store; persists for the life of the Node process
const attempts: Map<Key, number[]> = globalThis.__loginAttempts ?? new Map<Key, number[]>();
globalThis.__loginAttempts = attempts;

function prune(key: Key, now = Date.now()) {
  const arr = attempts.get(key);
  if (!arr) return;
  const start = now - WINDOW_MS;
  const pruned = arr.filter((t) => t >= start);
  if (pruned.length) {
    attempts.set(key, pruned);
  } else {
    attempts.delete(key);
  }
}

export function isRateLimited(key: Key, now = Date.now()): boolean {
  prune(key, now);
  const arr = attempts.get(key) || [];
  return arr.length >= MAX_ATTEMPTS;
}

export function recordFailedAttempt(key: Key, now = Date.now()): void {
  prune(key, now);
  const arr = attempts.get(key) || [];
  arr.push(now);
  attempts.set(key, arr);
}

export function resetAttempts(key: Key): void {
  attempts.delete(key);
}

export const RATE_LIMIT_WINDOW_MINUTES = Math.round(WINDOW_MS / 60000);
export const RATE_LIMIT_MAX_ATTEMPTS = MAX_ATTEMPTS;
