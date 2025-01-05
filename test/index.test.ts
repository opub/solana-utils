import { echo } from '../src';

/**
 * Unit tests for the `echo` function.
 */
describe('echo', () => {
  it('should return the same string input', () => {
    const input = 'Hello, World!';
    const result = echo(input);
    expect(result).toBe(input);
  });

  it('should return the same number input', () => {
    const input = 42;
    const result = echo(input);
    expect(result).toBe(input);
  });

  it('should return the same object input', () => {
    const input = { key: 'value' };
    const result = echo(input);
    expect(result).toEqual(input);
  });

  it('should return the same array input', () => {
    const input = [1, 2, 3];
    const result = echo(input);
    expect(result).toEqual(input);
  });

  it('should return the same boolean input', () => {
    const input = true;
    const result = echo(input);
    expect(result).toBe(input);
  });
});
