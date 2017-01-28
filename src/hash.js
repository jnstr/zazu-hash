const crypto = require('crypto');

module.exports = (pluginContext) => (name, env = {}) => new Promise((resolve, reject) => {
  resolve([
    {
      icon: 'fa-hand-spock-o',
      title: `Hello, ${name}!`,
      subtitle: 'Please type your name!',
    },
  ]);
});
