import {DEFAULT_VALUE, STORAGE_KEY} from '../constants';
import {get as getStorage, set as setStorage, defaults} from './local-storage';

export type Item = string;

export const get = (): Item[] => {
  const data = getStorage(STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as Item[];
  }

  return [];
};

export const add = (item: Item): Item[] => {
  const items = get();
  const newData = [...items, item];

  setStorage(STORAGE_KEY, JSON.stringify(newData));

  return newData;
};

export const remove = (index: number): Item[] => {
  const items = [...get()];
  items.splice(index, 1);

  setStorage(STORAGE_KEY, JSON.stringify(items));

  return items;
};

// Define defaults
defaults(DEFAULT_VALUE);
