import React, {useState} from 'react';

type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  name: string;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({checked, onChange, name, disabled}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <input disabled={disabled} type="checkbox" name={name} checked={isChecked} onChange={handleChange}/>
  );
};

export default Checkbox;