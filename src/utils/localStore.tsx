export const getStore = (key: string): any => {
  return localStorage.getItem(key) || null;
};
export const setStore = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};
export const removeStore = (key: string): void => {
  localStorage.removeItem(key);
};
