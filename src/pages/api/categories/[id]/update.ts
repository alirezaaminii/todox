import { NextApiRequest, NextApiResponse } from 'next';
import { CategoryInterface } from '@/types';
import { connectToDatabase } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'PUT') {
      const { id } = req.query;
      const { name } = req.body;

      if (!id || !name) {
        res.status(400).end();
        return;
      }

      const db = await connectToDatabase();
      const categoriesCollection = db.collection<CategoryInterface>('categories');

      const categoryToUpdate = await categoriesCollection.findOne({
        id: Number(id),
      });

      if (!categoryToUpdate) {
        res.status(404).end();
        return;
      }

      const updatedCategory = {
        ...categoryToUpdate,
        name,
      };

      const result = await categoriesCollection.updateOne(
        { id: Number(id) },
        { $set: updatedCategory }
      );

      if (result.modifiedCount === 0) {
        res.status(500).end();
        return;
      }

      res.status(200).json(updatedCategory);
    } else {
      res.status(405).end();
    }
  }
  catch (e) {
    res.status(500).json({ message: "Error updating category and task" });
  }
}