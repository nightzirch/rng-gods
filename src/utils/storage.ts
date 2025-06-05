const isClient = typeof window !== 'undefined';

/**
 * Save data to localStorage
 * @param key The key to store the data under
 * @param value The data to store
 * @returns boolean indicating if the operation was successful
 */
export const saveToStorage = <T>(key: string, value: T): boolean => {
  if (!isClient) return false;
  
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

/**
 * Load data from localStorage
 * @param key The key to load data from
 * @param defaultValue The default value to return if no data exists
 * @returns The stored data or the default value
 */
export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  if (!isClient) return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    
    return JSON.parse(item) as T;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

/**
 * Remove data from localStorage
 * @param key The key to remove
 * @returns boolean indicating if the operation was successful
 */
export const removeFromStorage = (key: string): boolean => {
  if (!isClient) return false;
  
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

/**
 * Check if data exists in localStorage
 * @param key The key to check
 * @returns boolean indicating if the key exists
 */
export const existsInStorage = (key: string): boolean => {
  if (!isClient) return false;
  return localStorage.getItem(key) !== null;
};
