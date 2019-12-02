const {
  sum
} = require('../common/sum');

describe('matchers test', () => {
  it('number test', () => {
    const value = 1 + 2;
    expect(value).toBe(3);
    expect(value).toBeGreaterThan(2);
    expect(value).toBeLessThan(5);

    const floatValue = 0.1 + 0.2;
    expect(floatValue).toBeCloseTo(0.3);
  });
  it('String: there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  it('String: but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  it('object assignment', () => {
    const data = {
      one: 1
    };
    data['two'] = 2;
    expect(data).toEqual({
      one: 1,
      two: 2
    });
  });

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeTruthy();
  });
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });
});