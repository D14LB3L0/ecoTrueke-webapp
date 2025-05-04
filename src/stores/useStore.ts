import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUserSlice } from "./user-store/interfaces/user.slice.interface";
import { createUserSlice } from "./user-store/userSlice";
import { IPersonSlice } from "./person-store/interface/person.slice.interface";
import { createPersonSlice } from "./person-store/personSlice";
import { IDashboardSlice } from "./dashboard-store/interface/dashboard.slice.interface";
import { createDashboardSlice } from "./dashboard-store/dashboardSlice";

type SharedState = IUserSlice & IPersonSlice & IDashboardSlice;

export const useStore = create<SharedState>()(
  persist(
    (set, get, store) => ({
      ...createUserSlice(set, get, store),
      ...createPersonSlice(set, get, store),
      ...createDashboardSlice(set, get, store),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: SharedState) => ({
        user: state.user,
        editProfile: state.editProfile,
        person: state.person,
        collapsedSideBar: state.collapsedSideBar,
      }),
    }
  )
);
