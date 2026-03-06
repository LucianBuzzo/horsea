const test = require('../../horsea');

test.block('pass fixture', () => {
  test.assert(2 + 2 === 4, 'math still works');
});

test.end();
