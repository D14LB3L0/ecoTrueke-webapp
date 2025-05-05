import { INotification } from "@/interfaces/notification.interface";

export interface INotificationSlice {
  notifications: INotification[];
  setNotifications: (notification: INotification[]) => void;
  paginationTotalPages: number;
  setPagintaionTotalPages: (paginationTotalPages: number) => void;
  paginationPage: number;
  setPaginationPage: (paginationPage: number) => void;
  paginationAmountPage: number;
}
