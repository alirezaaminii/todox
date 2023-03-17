import React, {useState} from 'react';

type CheckboxProps = {
  checked: boolean;
  name: string;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({checked, onChange, name}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <input type="checkbox" name={name} checked={isChecked} onChange={handleChange}/>
  );
};

export default Checkbox;