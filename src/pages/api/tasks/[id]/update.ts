import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {TaskInterface} from "@/types";

type TasksData = {
  tasks: TaskInterface[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, status, categoryId } = req.body;
    const filePath = path.join(process.cwd(), 'tasks.json');

    const currentTasksData: TasksData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : { tasks: [] };

    const taskToUpdate = currentTasksData.tasks.find(
      (task) => task.id === Number(id)
    );

    if (!taskToUpdate) {
      res.status(404).end();
      return;
    }

    const updatedTasks = currentTasksData.tasks.map((task) => {
      if (task.id === Number(id)) {
        return {
          ...task,
          name: name || task.name,
          status: status || task.status,
          categoryId: categoryId || task.categoryId,
        };
      }
      return task;
    });

    const updatedTasksData = { tasks: updatedTasks };
    fs.writeFileSync(filePath, JSON.stringify(updatedTasksData));

    res.status(200).json(updatedTasksData);
  } else {
    res.status(405).end();
  }
}