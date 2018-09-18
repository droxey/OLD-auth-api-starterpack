const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Thing APIs', () => {
  // #TODO: Implement thing.test.js.
});
