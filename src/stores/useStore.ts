import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUserSlice } from "./user-store/interfaces/user.slice.interface";
import { createUserSlice } from "./user-store/userSlice";

type SharedState = IUserSlice

export const useStore = create<SharedState>()(
    persist(
        (set, get, store) => ({
            ...createUserSlice(set, get, store),
        }),
        {
            name: 'storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state: IUserSlice) => ({
                user: state.user,
                editProfile: state.editProfile
            }),
        }
    )
);
