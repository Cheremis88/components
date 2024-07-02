import InputText from '../InputText';
import Button from '../Button';
import styles from './index.module.css';
import { FormEvent, useRef } from 'react';

interface ListFormProps {
  callback: (value: string) => void;
}

function ListForm({ callback }: ListFormProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const item = inputRef.current?.value;
    if (!item || !item.trim()) return;
    callback(item);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Работа со списком</h2>
      <label className={styles.label}>
        <span>Название фильма</span>
        <InputText inputRef={inputRef} placeholder="Отступники" />
      </label>
      <Button type="submit">Добавить</Button>
      <label className={styles.label}>
        <span>Фильтр списка</span>
        <InputText placeholder="Начните ввод" />
      </label>
    </form>
  );
}

export default ListForm;