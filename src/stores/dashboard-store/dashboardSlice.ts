import { StateCreator } from "zustand";
import { IDashboardSlice } from "./interface/dashboard.slice.interface";

export const createDashboardSlice: StateCreator<
  IDashboardSlice,
  [],
  [],
  IDashboardSlice
> = (set) => ({
  editProfile: "person",
  setEditProfile: (editProfile: "person" | "user") => set({ editProfile }),
  collapsedSideBar: true,
  setCollapsedSideBar: (collapsedSideBar: boolean) => set({ collapsedSideBar }),
});
