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
  paginationTotalPages: 1,
  setPagintaionTotalPages: (paginationTotalPages: number) => set({paginationTotalPages}),
  paginationPage: 1,
  setPaginationPage: (paginationPage: number) => set({paginationPage}),
  paginationAmountPage: 3
});
