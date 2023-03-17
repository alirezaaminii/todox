import React from "react";
import {CategoryInterface, TaskInterface} from "@/types";
import {useBoolean} from "@/hooks/useBoolean";
import {CategoryStyles} from "@/components/category/style";
import {AngleDownIcon, FolderIcon} from "@/components/icons";
import Task from "@/components/task";
import {useUpdateTask} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";

interface Props extends CategoryInterface {
  tasks: TaskInterface[];
}

export const Category: React.FunctionComponent<Props> = (props) => {
  const queryClient = useQueryClient();
  const updateTask = useUpdateTask();
  const [isOpen, setIsOpenActions] = useBoolean(false);
  const havePendingTasks = props.tasks.some(task => task.status === 'pending');

  const handleUpdateTask = (task: TaskInterface) => {
    updateTask.mutateAsync(task).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }
  return (
    <CategoryStyles isOpen={isOpen} isAllDone={!havePendingTasks}>
      <div className="category-details" onClick={setIsOpenActions.toggle}>
        <div className="column">
          <div className="category-details--icon"><FolderIcon/></div>
          <div className="category-details--name">{props.name}</div>
        </div>
        <div className="column right-column">
          <div className="category-details--bar">
            <div/>
          </div>
          <AngleDownIcon className="category-details--angle"/>
          <div className="category-details--task-number"><p>{props.tasks.length}</p></div>
          <div className="category-details--options"></div>
        </div>
      </div>

      {
        isOpen && (
          <div className="category-tasks">
            {props.tasks.map((task) => <Task onChange={handleUpdateTask} key={task.id} {...task}/>)}
          </div>
        )
      }
    </CategoryStyles>
  )
}

export default Category;