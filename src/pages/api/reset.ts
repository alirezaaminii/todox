import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import {tasksFilePath} from "@/pages/api/tasks/create";
import {categoriesFilePath} from "@/pages/api/categories";

export default function deleteData(req: NextApiRequest, res: NextApiResponse) {
  try {
    fs.writeFileSync(categoriesFilePath, JSON.stringify({ categories: [] }));
    fs.writeFileSync(tasksFilePath, JSON.stringify({ tasks: [] }));
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}