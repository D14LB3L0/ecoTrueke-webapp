import { StateCreator } from "zustand";
import { IUserSlice } from "./interfaces/user.slice.interface";
import { IUser } from "@/interfaces/user.interface";

export const createUserSlice: StateCreator<IUserSlice, [], [], IUserSlice> = (
  set
) => ({
  user: { token: "", email: "", accountStatus: "" },
  setUser: (user: IUser) => set({ user }),
});
