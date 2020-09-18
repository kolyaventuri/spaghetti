const {localStorage} = window;
const {setItem, getItem} = window.localStorage;

export const set = setItem.bind(localStorage);
export const get = getItem.bind(localStorage);

export const defaults = (options: {[key: string]: any}): void => {
  const keys = Object.keys(options);

  for (const key of keys) {
    const data = options[key];
    const existing = Boolean(get(key));

    if (!existing) {
      set(key, data);
    }
  }
};
