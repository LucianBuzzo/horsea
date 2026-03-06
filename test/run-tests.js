const assert = require('assert');
const { spawnSync } = require('child_process');
const path = require('path');

const runFixture = (name) => {
  const fixturePath = path.join(__dirname, 'fixtures', name);
  return spawnSync(process.execPath, [fixturePath], { encoding: 'utf8' });
};

const passResult = runFixture('pass.js');
assert.strictEqual(passResult.status, 0, `Expected pass fixture to exit 0, got ${passResult.status}\n${passResult.stdout}\n${passResult.stderr}`);

const failResult = runFixture('fail.js');
assert.strictEqual(failResult.status, 1, `Expected fail fixture to exit 1, got ${failResult.status}\n${failResult.stdout}\n${failResult.stderr}`);

console.log('PASS horsea exit code behavior verified');
