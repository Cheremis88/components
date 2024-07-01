import { ReactNode } from 'react';
import styles from './index.module.css';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;