import { NextApiRequest, NextApiResponse } from 'next';
import tasksData from './tasks.json';
import categoriesData from './categories.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Join tasks and categories data on categoryId and id properties
    const tasksWithCategories = tasksData.tasks.map((task) => {
      const category = categoriesData.categories.find((category) => category.id === task.categoryId);
      return { ...task, category };
    });

    res.status(200).json(tasksWithCategories);
  } else {
    res.status(405).end();
  }
}