const {
  stringExceptionCheck
} = require('../common/common');

describe('stringExceptionCheck()', () => {
  it('parameter is null', () => {
    expect(stringExceptionCheck(null)).toBe(true);
  });
  it('parameter is NaN', () => {
    expect(stringExceptionCheck(NaN)).toBeTruthy();
  });
  it('parameter is undefined', () => {
    expect(stringExceptionCheck(undefined)).toBeFalsy();
  });
  it('parameter length is zero', () => {
    const str = "";
    expect(stringExceptionCheck(str)).toBeTruthy();
  });
});