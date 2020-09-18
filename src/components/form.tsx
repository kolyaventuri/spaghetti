import React, {useState} from 'react';

type Props = {
  onSubmit: (message: string) => void;
};

const Form: React.FC<Props> = ({onSubmit}: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event?.target?.value ?? '';

    setValue(newValue);
  };

  const doSubmit = (): void => {
    if (!value.trim()) {
      return;
    }

    onSubmit(value);
    setValue('');
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event?.key === 'Enter') {
      doSubmit();
    }
  };

  const clickHandler = (): void => {
    doSubmit();
  };

  return (
    <div className="form">
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button className="button" type="button" onClick={clickHandler}>
        Add It
      </button>
    </div>
  );
};

export default Form;
