import { ReactNode } from 'react';
import styles from './index.module.css';

interface ColorItemProps {
  children: ReactNode;
  backgroundColor: string;
}

function ColorItem({ children, backgroundColor }: ColorItemProps) {
  return (
    <li className={styles.item} style={{backgroundColor}}>
      {children}
    </li>
  );
}

export default ColorItem;