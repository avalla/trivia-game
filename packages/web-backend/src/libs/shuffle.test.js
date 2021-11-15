const shuffle = require('./shuffle');

describe('Shuffle library\n\tWARNING: sometimes there will be a false positive (1 over 10k times)', () => {
  const array = [...Array(10000).keys()]; // Creates a sequence of 10k items
  it('Should shuffle array #1', () => {
    const shuffled = shuffle(array);
    expect(array.length).toBe(shuffled.length);
    expect(JSON.stringify(shuffled)).not.toBe(JSON.stringify(array));
  });
  it('Should shuffle array #2', () => {
    const shuffled = shuffle(array);
    expect(array.length).toBe(shuffled.length);
    expect(JSON.stringify(shuffled)).not.toBe(JSON.stringify(array));
  });
  describe('Should throw an error when value is not an array', () => {
    it('Value is an object', () => {
      const value = {};
      expect(() => shuffle(value))
        .toThrow(new Error('Sorry, this is not a valid array'));
    });
    it('Value is undefined', () => {
      const value = undefined;
      expect(() => shuffle(value))
        .toThrow(new Error('Sorry, this is not a valid array'));
    });
    it('Value is a string', () => {
      const value = 'String';
      expect(() => shuffle(value))
        .toThrow(new Error('Sorry, this is not a valid array'));
    });
    it('Value is a number', () => {
      const value = 10;
      expect(() => shuffle(value))
        .toThrow(new Error('Sorry, this is not a valid array'));
    });
  })
});
