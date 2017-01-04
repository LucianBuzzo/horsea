# Horsea

A tiny module for running simple unit tests.

## Example

``` js
const test = require('horsea');

const square = num => num * num;

test.block('When using the "square" function', () => {
  test.assert(square(4) === 16, 'The return value should be the square of the input value');
});

test.end();
```

```
$ node square.test.js 

When using the "square" function:

    PASS The return value should be the square of the input value

1 tests passed
0 tests failed
```

## Usage

You always need to use `require('horsea')` in test files.  
You can run the tests by usual node means (`require('test-file.js')` or `node test-file.js`).

## Methods

### block

Defines a new block of test assertions. The provided message is used as a block header.  
This is mainly used as a way to neatly format output.

#### Arguments

*{String}* message - The block header to display.
*{Function}* func - A function containing test assertions to run.

### assert
If expression is truthy, the word "PASS" is printed, else the word "FAIL" is 
printed. The message provided is then displayed immediately afterwards.

#### Arguments
*{Mixed}* expression - An expression to evaluate for "truthiness".
*{String}* message - A message to display.

### end
Signals the end of the test and prints the total number of failing and passed 
tests. **Takes no arguments**.

