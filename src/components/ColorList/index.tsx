import { TColorList } from '../../constants/types';
import ColorItem from '../ColorItem';
import styles from './index.module.css';

interface ColorListProps {
  list: TColorList;
}

function ColorList({ list }: ColorListProps) {
  return (
    <ul className={styles.list}>
      {list.map(item =>
        <ColorItem backgroundColor={item.color} key={item.title}>
          {item.title}
        </ColorItem>
      )}
    </ul>
  );
}

export default ColorList;