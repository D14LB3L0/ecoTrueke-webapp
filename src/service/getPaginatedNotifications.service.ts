import ecoTruekeApi from "@/api/ecoTrueke.api";
import { INotification } from "@/interfaces/notification.interface";

export interface GetPaginatedNotificationsRequest {
  page: number;
  amountPage: number;
}

interface GetPaginatedNotificationsData {
  notifications: INotification[];
  totalPages: number;
}
interface GetPaginatedNotificationsResponse {
  data: GetPaginatedNotificationsData;
  message: string;
}

export class GetPaginatedNotificationsService {
  static async getPaginatedNotifications(
    getPaginatedNotificationsRequest: GetPaginatedNotificationsRequest
  ): Promise<GetPaginatedNotificationsData> {
    try {
      const response =
        await ecoTruekeApi.get<GetPaginatedNotificationsResponse>(
          "notification/pagination",
          {
            params: getPaginatedNotificationsRequest,
          }
        );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
