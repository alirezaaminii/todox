import React from "react";
import {CategoryInterface, TaskInterface} from "@/types";
import {useBoolean} from "@/hooks/useBoolean";
import {CategoryStyles} from "@/components/category/style";
import {AngleDownIcon, FolderIcon} from "@/components/icons";
import Task from "@/components/task";
import {useCreateTask, useDeleteTasks, useUpdateTask} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";
import NewTask from "@/components/new-task";

interface Props extends CategoryInterface {
  tasks: TaskInterface[];
  isOpen?: boolean;
}

export const Category: React.FunctionComponent<Props> = (props) => {
  const queryClient = useQueryClient();
  const updateTask = useUpdateTask();
  const createTask = useCreateTask();
  const deleteTasks = useDeleteTasks();
  const [isOpen, setIsOpenActions] = useBoolean(props.isOpen);
  const tasksLength = props.tasks.length;
  const isAllDone = tasksLength > 0 && !props.tasks.some(task => task.status === 'pending');

  const handleUpdateTask = (task: TaskInterface) => {
    updateTask.mutateAsync(task).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }

  const handleCreateTask = (taskName: string) => {
    createTask.mutateAsync({name: taskName, categoryId: props.id}).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }

  const handleDeleteTasks = (taskIds: number[]) => {
    deleteTasks.mutateAsync(taskIds).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }
  return (
    <CategoryStyles isOpen={isOpen} isAllDone={isAllDone}>
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
          <div className="category-details--task-number"><p>{tasksLength}</p></div>
          <div className="category-details--options"></div>
        </div>
      </div>

      {
        isOpen && (
          <>
            <div className="category-tasks">
              {props.tasks.map((task) =>
                <Task
                  onDelete={(taskId) => handleDeleteTasks([taskId])}
                  onChange={handleUpdateTask}
                  key={task.id}
                  {...task}
                />
              )}
            </div>
            <NewTask onChange={handleCreateTask}/>
          </>
        )
      }
    </CategoryStyles>
  )
}

export default Category;