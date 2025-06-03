import { StateCreator } from "zustand";
import { IUserRatingSlice } from "./interfaces/userRating.slice.interface";
import { IUserRating } from "@/interfaces/userRating.interface";

export const createUserRatingSlice: StateCreator<
  IUserRatingSlice,
  [],
  [],
  IUserRatingSlice
> = (set) => ({
  userStars: { averageStars: 0 },
  setUserStars: (userStars: IUserRating) => set({ userStars }),
});
