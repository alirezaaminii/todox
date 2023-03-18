import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import {TaskInterface} from "@/types";
import {extractFileData} from "@/utils/extract-file-data";
import {getAPIBaseURL} from "@/utils/env";

function getNextTaskId(tasks: TaskInterface[]) {
  const maxId = tasks.reduce((max, task) => {
    return task.id > max ? task.id : max;
  }, 0);
  return maxId + 1;
}

export const tasksFilePath = path.join(process.cwd(), 'src/pages/api/tasks/tasks.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      let {name, categoryId} = req.body;
      const currentTasksData = extractFileData(tasksFilePath, {tasks: []})
      const newTaskId = getNextTaskId(currentTasksData.tasks);
      if (!categoryId) {
        const response = await fetch(`${getAPIBaseURL()}categories/create`, {
          method: "POST",
          headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        categoryId = data.id;
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