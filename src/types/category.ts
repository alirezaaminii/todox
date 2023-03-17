import TaskInterface from "@/types/task";

export interface CategoryInterface {
  name: string;
  id: number;
  tasks: TaskInterface[];
}

export default CategoryInterface