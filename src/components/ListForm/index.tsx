import InputText from '../InputText';
import Button from '../Button';
import styles from './index.module.css';
import { ChangeEvent, FormEvent, useRef } from 'react';

interface ListFormProps {
  add: (name: string) => void;
  filter: (value: string) => void;
}

function ListForm({ add, filter }: ListFormProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const value = inputRef.current?.value;
    if (!value || !value.trim()) return;
    add(value);
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    filter(evt.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Название фильма</span>
        <InputText inputRef={inputRef} placeholder="Отступники" />
      </label>
      <Button type="submit">Добавить</Button>
      <label className={styles.label}>
        <span>Фильтр списка</span>
        <InputText placeholder="Начните ввод" onChange={handleChange} />
      </label>
    </form>
  );
}

export default ListForm;