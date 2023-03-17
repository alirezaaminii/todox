import {NextApiRequest, NextApiResponse} from 'next';
import path from "path";
import {CategoryInterface, TaskInterface} from "@/types";
import {extractFileData} from "@/utils/extract-file-data";
import {tasksFilePath} from "@/pages/api/tasks/create";

export const categoriesFilePath = path.join(process.cwd(), 'src/pages/api/categories/categories.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const categoriesData = extractFileData(categoriesFilePath, {categories: []});
    const tasksData = extractFileData(tasksFilePath, {tasks: []});

    // Join tasks and categories data on categoryId and id properties
    const categoriesWithTasks = (categoriesData ?? {categories: []}).categories.map((category: CategoryInterface) => {
      const tasks = tasksData.tasks.filter((task: TaskInterface) => task.categoryId === category.id);
      return {...category, tasks};
    });

    res.status(200).json(categoriesWithTasks);
  } else {
    res.status(405).end();
  }
}