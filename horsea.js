/**
 * Tiny module for running simple unit tests.
 */

const Horsea = function() {
  this.failed = 0;
  this.passed = 0;
};


/**
 * @method assert
 * @description If expression is truthy, the word "PASS" is printed, else the
 * word "FAIL" is printed. The message provided is then displayed immediately
 * afterwards.
 *
 * @param {Mixed} expression - An expression to evaluate for "truthiness".
 * @param {String} message - A message to display.
 * @return {void}
 *
 * @example
 * const square = num => num * num;
 *
 * Horsea.assert(square(4) === 16, 'Square function should square a number');
 * // --> "    PASS Square function should square a number"
 *
 */
Horsea.prototype.assert = function(expression, message) {
  if (expression) {
    this.passed++;
  } else {
    this.failed++;
  }

  console.log(expression ? '    PASS' : '--> FAIL', message);
};

/**
 * @method block
 * @description Defines a new block of test assertions. The provided message is
 * used as a block header.
 * This is mainly used as a way to neatly format output.
 *
 * @param {String} message - The block header to display.
 * @param {Function} func - A function containing test assertions to run.
 * @return {void}
 */
Horsea.prototype.block = (message, func) => {
  console.log(`\r\n\r\n${message}\r\n`);
  func();
  console.log();
};

/**
 * @method end
 * @description Signals the end of the test and prints the total number of
 * failing and passed tests.
 *
 * @return {void}
 */
Horsea.prototype.end = function() {
  console.log(`\r\n${this.passed} tests passed`);
  console.log(`${this.failed} tests failed`);
  console.log();
};

module.exports = new Horsea();
