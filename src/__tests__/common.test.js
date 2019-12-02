const {
  stringExceptionCheck
} = require('../common/common');

test('stringExceptionCheck()', () => {
  const str = "";
  expect(stringExceptionCheck(null)).toBe(true);
  expect(stringExceptionCheck(NaN)).toBeTruthy();
  expect(stringExceptionCheck(undefined)).not.toBeTruthy();
  expect(stringExceptionCheck(str)).toBeTruthy();
});