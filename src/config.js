import { get, set, remove } from './utils/rc';

const config = async (action, key, value) => {
  switch (action) {
    case 'get':
      if (key) {
        let result = await get(key);
        console.log(result);
      } else {
        let obj = await get();
        Object.keys(obj).forEach((key) => {
          console.log(`${key}=${obj[key]}`);
        });
      }
      break;
    case 'set':
      set(key, value);
      break;
    case 'remove':
      remove(key);
      break;
    default:
      break;
  }
};

module.exports = config;
