import { TColorList } from '../constants/types';
import { COLORS } from '../constants/variables';
import { getRandomItem } from './getRandomItem';

export function addColor(data: string | string[]): TColorList {
  let newData;
  if (typeof data === 'string') {
    newData = [data];
  } else {
    newData = [...data];
  }
  const arrayWithColors = newData.map(item => {
    let color = getRandomItem(COLORS);
    return {title: item, color};
  });
  return arrayWithColors;
}