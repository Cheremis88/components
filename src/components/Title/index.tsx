import { ReactNode } from 'react';
import styles from './index.module.css';

interface TitleProps {
  children: ReactNode;
  size?: 1 | 2 | 3;
  separator?: boolean;
}

function Title({ children, size = 1, separator }: TitleProps) {

  const Tag =
    size === 1 ? 'h1' :
    size === 2 ? 'h2' :
    'h3';

  const classes =
    separator ? [styles.title, styles.line].join(' ') : styles.title;

  return (
    <Tag className={classes}>{children}</Tag>
  );
}

export default Title;