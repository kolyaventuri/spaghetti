import React, {useState} from 'react';

const Form: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event?.target?.value ?? '';

    setValue(newValue);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default Form;
