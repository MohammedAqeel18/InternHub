'use client'
import { useState } from "react"

export default function ClickMe(){

    const [done,setDone] = useState(false)

    return(
    <button onClick={()=> setDone(!done)} className="bg-blue-500 text-white px-4 py-2 border rounded"> {done?'completed ✅':'mark as complete  '}</button>
        
     )
}