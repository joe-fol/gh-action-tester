import { sumTwoNum } from './main.js';

describe("sumTwoNum test", () => {
  it('should add two nubers together', () => {
    const result = sumTwoNum(5, 10);

    expect(result).toBe(15);
  })
})