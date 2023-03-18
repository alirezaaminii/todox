import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import {extractFileData} from "@/utils/extract-file-data";
import {tasksFilePath} from "@/pages/api/tasks/create";
import {TaskInterface} from "@/types";

export default function deleteTasks(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { ids } = req.body;

  if (!ids || !Array.isArray(ids)) {
    res.status(400).json({ message: 'Invalid request body' });
    return;
  }

  try {
    const tasksData = extractFileData(tasksFilePath, {tasks: []})

    const updatedTasks = tasksData.tasks.filter((task: TaskInterface) => !ids.includes(task.id));

    fs.writeFileSync(tasksFilePath, JSON.stringify({ tasks: updatedTasks }));

    res.status(200).json({ message: 'Tasks deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}