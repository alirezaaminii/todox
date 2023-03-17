import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {TaskInterface} from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, categoryId } = req.body;

    const filePath = path.join(process.cwd(), 'src/pages/api/tasks/tasks.json');
    const currentTasksData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : { tasks: [] };
    const newTaskId = (currentTasksData.tasks[currentTasksData.tasks.length - 1]?.id ?? 0) + 1;
    const task: TaskInterface = { id: newTaskId, createdAt: Date.now(), name, categoryId, status: 'pending' };

    const updatedTasksData = { tasks: [...currentTasksData.tasks, task] };
    fs.writeFileSync(filePath, JSON.stringify(updatedTasksData));

    res.status(201).json(updatedTasksData);
  } else {
    res.status(405).end();
  }
}