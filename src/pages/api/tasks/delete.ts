import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import { TaskInterface } from '@/types';

export default async function deleteTasks(req: NextApiRequest, res: NextApiResponse) {
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
    const db = await connectToDatabase();
    const tasksCollection = db.collection<TaskInterface>('tasks');

    await tasksCollection.deleteMany({ id: { $in: ids } });

    res.status(200).json({ message: 'Tasks deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}