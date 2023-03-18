import React from "react";
import {CategoryInterface, TaskInterface} from "@/types";
import {useBoolean} from "@/hooks/useBoolean";
import {CategoryStyles} from "@/components/category/style";
import {AngleDownIcon, FolderIcon, OptionsIcon} from "@/components/icons";
import Task from "@/components/task";
import {useCreateTask, useDeleteTasks, useUpdateTask} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";
import NewTask from "@/components/new-task"
import DropDown from "@/components/dropdown";

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

  const getPendingTasksIds: number[] = props.tasks.filter(task => task.status === 'pending').map(task => task.id);

  const dropDownOptions = [
    {
      label: 'Delete Pending Tasks',
      onClick: () => handleDeleteTasks(getPendingTasksIds)
    },
  ]

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
          <div className="category-details--options">
            <DropDown trigger={<OptionsIcon />} options={dropDownOptions}/>
          </div>
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