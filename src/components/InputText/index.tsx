import { ChangeEvent } from 'react';
import styles from './index.module.css';

interface InputTextProps {
  placeholder: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function InputText({ placeholder, inputRef, onChange }: InputTextProps) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChange}
    />
  );
}

export default InputText;