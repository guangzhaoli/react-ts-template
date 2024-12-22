import { create } from 'zustand';
import { UserState } from '@/types/user';

// export const useUserStore = create<UserState>()((set) => ({
//   userId: null,
//   userName: null,
//   login: (id, name) => set({ userId: id, userName: name }),
//   logout: () => set({ userId: null, userName: null }),
// }));