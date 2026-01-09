// src/lib/auth.ts
import { cookies } from "next/headers";

type User = {
  id: string;
  email: string;
};

export async function getCurrentUser(): Promise<User | null>{
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("session")

    if(!sessionCookie) return null;

    return {
        id:"demo-user-id",
        email:"demo@internhub.com"
    }
}