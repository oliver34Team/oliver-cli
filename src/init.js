const { args } = require('commander');

export default apply = (action, ...args) => {
  require(`./${action}`)(...args);
};
