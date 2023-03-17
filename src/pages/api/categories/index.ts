import {NextApiRequest, NextApiResponse} from 'next';
import tasksData from '../tasks/tasks.json';
import categoriesData from './categories.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Join tasks and categories data on categoryId and id properties
    const categoriesWithTasks = (categoriesData ?? {categories: []}).categories.map((category) => {
      const tasks = tasksData.tasks.filter((task) => task.categoryId === category.id);
      return {tasks, ...category};
    });

    res.status(200).json(categoriesWithTasks);
  } else {
    res.status(405).end();
  }
}