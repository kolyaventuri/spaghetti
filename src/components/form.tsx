import React, {useState} from 'react';

type Props = {
  onClick: (message: string) => void;
};

const Form: React.FC<Props> = ({onClick}: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event?.target?.value ?? '';

    setValue(newValue);
  };

  const clickHandler = (): void => {
    onClick(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={clickHandler}>
        Add It
      </button>
    </div>
  );
};

export default Form;
