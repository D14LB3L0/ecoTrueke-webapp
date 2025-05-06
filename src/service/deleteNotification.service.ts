import ecoTruekeApi from "@/api/ecoTrueke.api";

interface DeleteNotificationResponse {
  message: string;
}
export interface DeleteNotificationRequest {
  notificationId: string;
}

export class DeleteNotificationService {
  static async DeleteNotificationService(
    notification: DeleteNotificationRequest
  ): Promise<DeleteNotificationResponse> {
    try {
      const response = await ecoTruekeApi.delete<DeleteNotificationResponse>(
        `notification/${notification.notificationId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
