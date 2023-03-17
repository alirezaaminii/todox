export interface TaskInterface {
  id: number;
  name: string;
  createdAt: number;
  status: string;
  categoryId: number;
}

export type TaskStatus = 'pending' | 'done';

export interface CreateTask extends Pick<TaskInterface, 'name' | 'categoryId'> {}

export default TaskInterface