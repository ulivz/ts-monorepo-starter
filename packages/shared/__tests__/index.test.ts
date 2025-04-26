import { describe, it, expect } from 'vitest';
import { NAME, Options } from '@default-scope/shared';

describe('shared', () => {
  it('should export NAME constant', () => {
    expect(NAME).toBe('ts-monorepo-template');
  });

  it('should have correct Options interface', () => {
    const options: Options = { name: 'test' };
    expect(options.name).toBe('test');
  });
});
