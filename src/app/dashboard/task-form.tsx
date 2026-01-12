"use client"

import { addTask } from "@/actions/tasks"
import { useState } from "react"


export default function TaskForm(){
    const [loading,setLoading] = useState(false)

    const handleSubmit = async(formData: FormData) =>{
        setLoading(true)
        await addTask(formData)
        setLoading(false)
    }

    return(
        <form action={handleSubmit}>
        <input
        type="text"
        name="task"
        placeholder="Add Task"
        required
        />

        <button type="submit" disabled={loading}> {loading? "Adding":"Add Task"}</button>
        </form>
    )

}