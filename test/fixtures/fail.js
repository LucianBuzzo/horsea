const test = require('../../horsea');

test.block('fail fixture', () => {
  test.assert(false, 'this should fail');
});

test.end();
