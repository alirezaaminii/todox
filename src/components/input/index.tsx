import React, {useState} from "react";
import {InputStyles} from "@/components/input/style";
import {CheckedIcon} from "@/components/icons";

interface InputProps {
  type: string;
  placeholder: string;
  onSubmit: (value: string) => void;
  taskName: string;
}

const Input: React.FC<InputProps> = ({taskName, type, placeholder, onSubmit}) => {
  const [value, setValue] = useState(taskName ?? "");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
    }
  };

  return (
    <div className="task-name">
      <InputStyles
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="task-submit-button" onClick={handleSubmit}><CheckedIcon /></button>
    </div>
  );
};

export default Input;