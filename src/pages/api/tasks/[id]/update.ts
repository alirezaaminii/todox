import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import { TaskInterface } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, status, categoryId } = req.body;

    const db = await connectToDatabase();
    const tasksCollection = db.collection<TaskInterface>('tasks');

    const taskToUpdate = await tasksCollection.findOne({ id: Number(id) });

    if (!taskToUpdate) {
      res.status(404).end();
      return;
    }

    const updatedTask = {
      ...taskToUpdate,
      name: name || taskToUpdate.name,
      status: status || taskToUpdate.status,
      categoryId: categoryId || taskToUpdate.categoryId,
    };

    await tasksCollection.replaceOne({ id: Number(id) }, updatedTask);

    const updatedTasks = await tasksCollection.find().toArray();

    res.status(200).json(updatedTasks);
  } else {
    res.status(405).end();
  }
}