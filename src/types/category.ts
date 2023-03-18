import TaskInterface from "@/types/task";

export interface CategoryInterface {
  name: string;
  id: number;
  tasks: TaskInterface[];
}

export interface CreateCategory {
  name: string;
}

export default CategoryInterface