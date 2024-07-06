import InputText from '../InputText';
import Button from '../Button';
import styles from './index.module.css';
import { ChangeEvent, FormEvent, useRef } from 'react';

interface ListFormProps {
  add: (name: string) => void;
  filter: (value: string) => void;
  error: string;
}

function ListForm({ add, filter, error }: ListFormProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const value = inputRef.current?.value;
    if (!value || !value.trim()) return;
    add(value);
    inputRef.current.value = '';
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    
  }

  function handleFilter(evt: ChangeEvent<HTMLInputElement>) {
    const spaces = evt.target.value.at(-1) === ' ' && evt.target.value.at(-2) === ' ';
    if (spaces) {
      evt.target.value = evt.target.value.slice(0, -1);
    }
    filter(evt.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Название фильма</span>
        <InputText inputRef={inputRef} placeholder="Отступники" />
        {error && <span className={styles.error}>{error}</span>}
      </label>
      <Button type="submit">Добавить</Button>
      <label className={styles.label}>
        <span>Фильтр списка</span>
        <InputText placeholder="Начните ввод" onChange={handleFilter} />
      </label>
    </form>
  );
}

export default ListForm;