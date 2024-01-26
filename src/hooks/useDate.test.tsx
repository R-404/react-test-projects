import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDate } from './useDate';

describe('purchasing flow', () => {
    beforeEach(() => {
        vi.useFakeTimers()
      })
    
      afterEach(() => {
        vi.useRealTimers()
      })
    
      it('allows purchases within business hours', () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)
    
        expect(useDate()).toEqual({ message: 'Success' })
      })
    
      it('disallows purchases outside of business hours', () => {
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)
    
        expect(useDate()).toEqual({ message: 'Error' })
      })
})
