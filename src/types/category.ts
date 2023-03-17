import TaskInterface from "@/types/task";

interface CategoryInterface {
  name: string;
  id: number;
  tasks: TaskInterface[];
}

export default CategoryInterface