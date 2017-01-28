const expect = require('chai').expect;
const hash = require('../src/hash')();

describe('Hash', () => {
  it('hashes a string using common algorithms', () => {
    hash('zazu is great!').then((results) => {
      expect(results[0].value).to.be.equal('f2a93b01136c7a273a55aed775fccd95'); // md5
      expect(results[1].value).to.be.equal('2d6c01a7a1785479a598653b89d8190d0e926e08'); // sha1
      expect(results[2].value).to.be.equal('01d4b0db6e0d7c0f7f44e2dda6b9b2c79629bb7fc7e78209b8a18217515b4e64'); // sha256
      expect(results[3].value).to.be.equal('f68a92ca966bb3118e14cc7686f6c91cdd921b1e40dcb76f1c4674c322daf5209a237c935c51cbcaaab96260a9a5d116'); // sha384
      expect(results[4].value).to.be.equal('fd3cf8811d77003eec9c7fd0345419d07b841372441396de27a29e7bc1184a6a54c2533a83b2c6f412be51c699f3146ad88bbc9167b24cca3ff4f8660f1df97d'); // sha512
    });
  });
});
