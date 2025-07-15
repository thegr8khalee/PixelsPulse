import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useContactStore = create((set) => ({
  isLoading: false,

  sendEmail: async (data) => {
    set({ isLoading: true });
    try {
      await axiosInstance.post('/contact', data);
      toast.success('Message Deliverd!');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
