import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import {CATEGORIES_COLLECTION_NAME} from "@/pages/api/categories/create";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();

      const collection = db.collection(CATEGORIES_COLLECTION_NAME);
      const categoriesWithTasks = await collection.aggregate([
          {
            $lookup: {
              from: 'tasks',
              localField: 'id',
              foreignField: 'categoryId',
              as: 'tasks',
            },
          },
          {
            $sort: {
              _id: -1,
            },
          },
        ])
        .toArray();
      res.status(200).json(categoriesWithTasks);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving categories with tasks' });
    }
  } else {
    res.status(405).end();
  }
}