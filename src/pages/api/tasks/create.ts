import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import { TaskInterface } from '@/types';
import {getAPIBaseURL} from "@/utils/env";
import {TASKS_COLLECTION_NAME} from "@/constants";

async function getNextTaskId() {
  const db = await connectToDatabase();
  const tasks = await db.collection<TaskInterface>(TASKS_COLLECTION_NAME).find().toArray();
  const maxId = tasks.reduce((max, task) => {
    return task.id > max ? task.id : max;
  }, 0);
  return maxId + 1;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      let { name, categoryId } = req.body;
      const db = await connectToDatabase();
      if (!categoryId) {
        const response = await fetch(`${getAPIBaseURL()}categories/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
          throw new Error('Failed to create category');
        }

        const data = await response.json();
        categoryId = data.id;
      }
      const newTaskId = await getNextTaskId();
      const task: TaskInterface = { id: newTaskId, createdAt: Date.now(), name, categoryId, status: 'pending' };
      await db.collection<TaskInterface>(TASKS_COLLECTION_NAME).insertOne(task);
      res.status(201).json(task);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).end();
  }
}