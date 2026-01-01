'use client'
import { toggleTask } from "@/app/actions/toggletask"
export default function TaskToggle({id}:{id:number}){


    return(
    <button onClick={()=> toggleTask(id)} className="bg-blue-500 text-white px-4 py-2 border rounded"> Task Toggle</button>
        
     )
}