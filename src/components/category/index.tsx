import React, {useState} from "react";
import {useDebouncedCallback} from 'use-debounce';
import {CategoryInterface, TaskInterface} from "@/types";
import {useBoolean} from "@/hooks/useBoolean";
import {CategoryStyles} from "@/components/category/style";
import {AngleDownIcon, FolderIcon, OptionsIcon} from "@/components/icons";
import Task from "@/components/task";
import {useDeleteTasks} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";
import NewTask from "@/components/new-task"
import DropDown from "@/components/dropdown";
import {useUpdateCategory} from "@/hooks/data/categories";

interface Props extends CategoryInterface {
  tasks: TaskInterface[];
  isOpen?: boolean;
}

export const Category: React.FunctionComponent<Props> = (props) => {
  const queryClient = useQueryClient();
  const deleteTasks = useDeleteTasks();
  const updateCategory = useUpdateCategory();
  const [isOpen, setIsOpenActions] = useBoolean(props.isOpen);
  const tasksLength = props.tasks.length;
  const isAllDone = tasksLength > 0 && !props.tasks.some(task => task.status === 'pending');
  const [categoryName, setCategoryName] = useState(props.name ?? '');

  const invalidateCategories = () => {
    queryClient.invalidateQueries({queryKey: ['categories'],});
  }

  const debounced = useDebouncedCallback(
    (value) => {
      updateCategory.mutateAsync({...props, name: value}).then(invalidateCategories);
    },
    500
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
    debounced(e.target.value);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
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
      onClick: () => handleDeleteTasks(getPendingTasksIds),
      disabled: getPendingTasksIds.length === 0
    },
  ]

  return (
    <CategoryStyles isOpen={isOpen} isAllDone={isAllDone}>
      <div className="category-details" onClick={setIsOpenActions.toggle}>
        <div className="column">
          <div className="category-details--icon"><FolderIcon/></div>
          <div className="category-details--name">
            <input
              type="text"
              name={`category_name_${props.id}`}
              value={categoryName}
              onFocus={handleInputFocus}
              onClick={handleInputFocus}
              onChange={handleInputChange}
              maxLength={30}
            />
          </div>
        </div>
        <div className="column right-column">
          <AngleDownIcon className="category-details--angle"/>
          <div className="category-details--task-number"><p>{tasksLength}</p></div>
          <div className="category-details--options">
            <DropDown trigger={<OptionsIcon/>} options={dropDownOptions}/>
          </div>
        </div>
      </div>

      {
        isOpen && (
          <>
            <div className="category-tasks">
              {props.tasks.map((task) =>
                <Task
                  key={task.id}
                  {...task}
                />
              )}
            </div>
            <NewTask categoryId={props.id} />
          </>
        )
      }
    </CategoryStyles>
  )
}

export default Category;