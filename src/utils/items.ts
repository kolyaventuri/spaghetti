import {v4 as uuid} from 'uuid';
import {DEFAULT_VALUE, STORAGE_KEY} from '../constants';
import {get as getStorage, set as setStorage, defaults} from './local-storage';

export type Item = {
  id: string;
  data: string;
};

export const get = (): Item[] => {
  const data = getStorage(STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as Item[];
  }

  return [];
};

export const add = (data: string): Item[] => {
  const items = get();
  const id = uuid();
  const newData = [...items, {id, data}];

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
