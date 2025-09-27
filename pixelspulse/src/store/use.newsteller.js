import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useNewstellerStore = create((set) => ({
  isLoading: false,

  registerToNewsteller: async (data) => {
    set({ isLoading: true });
    try {
      await axiosInstance.post('/newsteller', data);
      toast.success('Successfully subscribed to newsletter!');
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
