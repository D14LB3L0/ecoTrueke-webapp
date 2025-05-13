import { StateCreator } from "zustand";
import { INotificationSlice } from "./interfacaes/notification.slice.interface";
import { INotification } from "@/interfaces/notification.interface";

export const createNotificationSlice: StateCreator<
  INotificationSlice,
  [],
  [],
  INotificationSlice
> = (set) => ({
  notifications: [],
  setNotifications: (notifications: INotification[]) => set({ notifications }),
  paginationTotalPagesNotifications: 1,
  setPagintaionTotalPagesNotifications: (paginationTotalPagesNotifications: number) => set({paginationTotalPagesNotifications}),
  paginationPageNotifications: 1,
  setPaginationPageNotifications: (paginationPageNotifications: number) => set({paginationPageNotifications}),
  paginationAmountPageNotifications: 3
});
