import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import {CATEGORIES_COLLECTION_NAME, TASKS_COLLECTION_NAME} from "@/constants";

export default async function deleteData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    await db.collection(CATEGORIES_COLLECTION_NAME).deleteMany({});
    await db.collection(TASKS_COLLECTION_NAME).deleteMany({});
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}