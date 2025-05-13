import { INotification } from "@/interfaces/notification.interface";

export interface INotificationSlice {
  notifications: INotification[];
  setNotifications: (notification: INotification[]) => void;
  paginationTotalPagesNotifications: number;
  setPagintaionTotalPagesNotifications: (paginationTotalPages: number) => void;
  paginationPageNotifications: number;
  setPaginationPageNotifications: (paginationPage: number) => void;
  paginationAmountPageNotifications: number;
}
