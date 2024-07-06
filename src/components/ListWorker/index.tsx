import { useState } from 'react';
import { FILMS } from '../../constants/variables';
import { addColor } from '../../helpers/addColor';
import ListForm from '../ListForm';
import ColorList from '../ColorList';
import Title from '../Title';
import styles from './index.module.css';

function ListWorker() {

  const [list, setList] = useState(() => addColor(FILMS));
  const [filter, setFilter] = useState('');
  const [error, setError] = useState('');

  function addItem(name: string) {
    const isDuplicate = list.some(item => item.title.toLocaleLowerCase() === name.toLocaleLowerCase());
    if (isDuplicate) {
      setError('Такое название уже есть в списке');
      return;
    }
    const item = addColor(name);
    setList([...list, ...item]);
  }

  function addFilter(value: string) {
    setFilter(value);
  }

  const filteredList = list.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className={styles.wrapper}>
      <ListForm add={addItem} filter={addFilter} error={error} />
      <ColorList list={filteredList} />
    </section>
  );
}

export default ListWorker;