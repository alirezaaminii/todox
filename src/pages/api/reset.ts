import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';

export default async function deleteData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    await db.collection('categories').deleteMany({});
    await db.collection('tasks').deleteMany({});
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}