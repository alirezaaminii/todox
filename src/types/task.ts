interface TaskInterface {
  id: number;
  name: string;
  createdAt: Date;
  status: TaskStatus;
}

export type TaskStatus = 'pending' | 'done';

export default TaskInterface