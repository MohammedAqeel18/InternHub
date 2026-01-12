"use server";

import { connectToDatabse } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { ObjectId } from "mongodb";

export async function addTask(formData: FormData) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const taskName = formData.get("task") as string;
  if (!taskName) return;

  const { db } = await connectToDatabse(
    process.env.MONGODB_URI!,
    process.env.MONGODB_DB_NAME!
  );

  await db.collection("tasks").insertOne({
    userId: user.id,
    name: taskName,
    createdAt: new Date(),
  });
}

export async function deleteTask(taskId: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const { db } = await connectToDatabse(
    process.env.MONGODB_URI!,
    process.env.MONGODB_DB_NAME!
  );

  await db.collection("tasks").deleteOne({
    _id: new ObjectId(taskId),
    userId: user.id,
  });
}
