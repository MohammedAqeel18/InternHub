import { cookies } from "next/headers";

type User = {

id: string,
email:string
};

export function getCurrentUser(): User | null {
    const session = cookies().get("session")?.value;

    if(!session){
        return null;
    }

    return {
        id: "demo-user-id",
        email:"demo@internhub.com"
    };
}