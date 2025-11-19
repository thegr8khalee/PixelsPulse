import { create } from 'zustand';

export const useUiStore = create((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
