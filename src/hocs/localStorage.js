export default {
  getValue(key) {
    let fullKey = `${key}`;
    return localStorage.getItem(fullKey);
  },
  getObject(key) {
    try {
      return this.getValue(key) ? JSON.parse(this.getValue(key)) : null;
    } catch (err) {
      console.log(`ERROR: Failed to parse ${key}, returning empty object`);
      return {};
    }
  },
  setValue(key, value) {
    let fullKey = `${key}`;
    return localStorage.setItem(fullKey, value);
  },
  setObject(key, object) {
    this.setValue(key, JSON.stringify(object));
  },
};
