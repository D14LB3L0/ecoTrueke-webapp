import { StateCreator } from "zustand";
import { IUserSlice } from "./interfaces/user.slice.interface";
import { IUser } from "@/interfaces/user.interface";

export const createUserSlice: StateCreator<IUserSlice, [], [], IUserSlice> = (set) => ({
    user: { token: '', id: '', personId: '', email: '', accountStatus: '', updatedAt: '', createdAt: '', isDeleted: false, },
    setUser: (user: IUser) => set({ user }),
});