import React from "react";
import {CategoryInterface, TaskInterface} from "@/types";
import {useBoolean} from "@/hooks/useBoolean";
import {CategoryStyles} from "@/components/category/style";
import {FolderIcon} from "@/components/icons";
import AngleDownIcon from "@/components/icons/AngleDownIcon";
import Task from "@/components/task";

interface Props extends CategoryInterface {
  tasks: TaskInterface[];
}

export const Category: React.FunctionComponent<Props> = (props) => {
  const [isOpen, setIsOpenActions] = useBoolean(false);
  return (
    <CategoryStyles isOpen={isOpen}>
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
            {props.tasks.map((task) => <Task key={task.id} {...task}/>)}
          </div>
        )
      }
    </CategoryStyles>
  )
}

export default Category;