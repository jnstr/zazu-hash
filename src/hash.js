const crypto = require('crypto');

/** List of supported hashing algorithms */
const ALGORITHMS = [
  'md5',
  'sha1',
  'sha256',
  'sha384',
  'sha512'
];

module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  const input = query || pluginContext.clipboard.readText();
  const items = [];

  ALGORITHMS.forEach((alg) => {
    const hash = crypto.createHash(alg).update(input).digest('hex');
    items.push({
      icon: 'fa-key',
      title: alg,
      subtitle: hash,
      value: hash
    });
  });

  resolve(items);
});
