import { redirect } from "next/navigation";
import { getCurrentUser } from "./session";

export async function requireAdmin() {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");
  return me;
}

