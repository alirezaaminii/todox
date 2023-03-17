import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import {TaskInterface} from "@/types";
import createCategory from "@/pages/api/categories/create";
import {extractFileData} from "@/utils/extract-file-data";

function getNextTaskId(tasks: TaskInterface[]) {
  const maxId = tasks.reduce((max, task) => {
    return task.id > max ? task.id : max;
  }, 0);
  return maxId + 1;
}

export const tasksFilePath = path.join(process.cwd(), 'src/pages/api/tasks/tasks.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      let {name, categoryId} = req.body;
      const currentTasksData = extractFileData(tasksFilePath, {tasks: []})
      const newTaskId = getNextTaskId(currentTasksData.tasks);
      if (!categoryId) {
        const newCategory = createCategory("Unknown")
        categoryId = newCategory.id
      }
      const task: TaskInterface = {id: newTaskId, createdAt: Date.now(), name, categoryId, status: 'pending'};

      const updatedTasksData = {tasks: [...currentTasksData.tasks, task]};
      fs.writeFileSync(tasksFilePath, JSON.stringify(updatedTasksData));

      res.status(201).json(updatedTasksData);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}