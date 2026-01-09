
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Dashboard(){

    const user = await getCurrentUser();

    if(!user){
        redirect("/login")
    }


    return(
        <div>
        <h1> Welcome, {user.email}</h1>
        <p> This is your dashboard data will be load here</p>    
        </div>
    )
}