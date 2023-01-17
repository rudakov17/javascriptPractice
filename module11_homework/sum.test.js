import { getPercents } from './sum.js';

describe('how much percents of number', () => {
  it('30 percents of 100 to equal 30', () => {
    expect(getPercents(30, 100)).toBe(30);
  });
  it('30 percents of 200 to equal 60', () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it('25 percents of 440 to equal 110', () => {
    expect(getPercents(25, 440)).toBe(110);
  });
  it('1 percents of 1000 to equal 10', () => {
    expect(getPercents(1, 1000)).toBe(10);
  });
});
