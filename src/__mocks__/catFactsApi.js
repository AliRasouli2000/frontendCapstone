import { vi } from 'vitest';

export const mockCatFactsFetch = {
  success: (fact = "Cats have five toes on their front paws") => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ fact }),
      })
    );
  },

  failure: () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Failed to fetch')));
  },

  reset: () => {
    global.fetch = vi.fn();
  },
};

