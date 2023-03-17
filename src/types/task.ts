interface TaskInterface {
  id: number;
  name: string;
  createdAt: string;
  status: string;
  categoryId: number;
}

export type TaskStatus = 'pending' | 'done';

export default TaskInterface