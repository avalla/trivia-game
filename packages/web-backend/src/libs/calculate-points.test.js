const calculate = require('./calculate-points');

describe('Calculate points', () => {
  it('Easy question', () => {
    expect(calculate('easy')).toBe(1);
  });
  it('Medium question', () => {
    expect(calculate('medium')).toBe(2);
  });
  it('Hard question', () => {
    expect(calculate('hard')).toBe(3);
  });
  describe('Should throw an error when difficulty is not recognized', () => {
    it('Value undefined', () => {
      expect(() => calculate())
        .toThrow(new Error('Difficulty not recognized'));
    });
    it('Value number', () => {
      expect(() => calculate(10))
        .toThrow(new Error('Difficulty not recognized'));
    });
    it('Value string', () => {
      expect(() => calculate('very hard'))
        .toThrow(new Error('Difficulty not recognized'));
    });
  })
});
