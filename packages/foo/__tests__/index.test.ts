import { describe, it, expect, vi } from 'vitest';
import { NAME } from '@default-scope/shared';

describe('foo', () => {
  it('should use shared module', () => {
    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Import module to trigger the console.log
    require('@default-scope/foo');
    
    // Verify console.log was called with NAME
    expect(consoleSpy).toHaveBeenCalledWith(NAME);
    
    // Clean up
    consoleSpy.mockRestore();
  });
});
