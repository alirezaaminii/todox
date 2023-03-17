import React, {useRef, useState} from "react";
import {TextAreaStyles} from "@/components/textarea/style";
import {CheckedIcon} from "@/components/icons";

interface InputProps {
  placeholder: string;
  onSubmit: (value: string) => void;
  taskName?: string;
  resetFieldAfterSubmit?: boolean;
}

const TextArea: React.FC<InputProps> = ({taskName, placeholder, onSubmit, resetFieldAfterSubmit}) => {
  const [value, setValue] = useState(taskName ?? "");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.trim() !== "") {
      onSubmit(value.trim());
      if(resetFieldAfterSubmit) {
        setValue("")
      }
    } else if(textAreaRef?.current) {
      textAreaRef.current.focus();
    }
  };

  const rows = Math.ceil(Number((value.length / 40)))

  return (
    <div className="task-name">
      <TextAreaStyles
        ref={textAreaRef}
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        rows={rows > 0 ? rows : 1}
      />
      <button className="task-submit-button" onClick={handleSubmit}><CheckedIcon /></button>
    </div>
  );
};

export default TextArea;