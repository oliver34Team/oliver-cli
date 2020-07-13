const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

export default {
  VERSION: '1.0.0',
  HOME,
  RC: `${HOME}/.olirc`,
  DEFAULTS: {
    registry: 'oliver34',
    type: 'users',
  },
};
