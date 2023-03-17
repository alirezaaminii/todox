export interface TaskInterface {
  id: number;
  name: string;
  createdAt: number;
  status: TaskStatus;
  categoryId: number;
}

export type TaskStatus = 'pending' | 'done';

export interface CreateTask {
  name: string;
  categoryId?: number;
}

export default TaskInterface