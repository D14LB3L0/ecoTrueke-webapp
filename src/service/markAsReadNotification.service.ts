import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface MarkAsReadNotificationRequest {
  notificationIds: string[];
}

interface MarkAsReadNotificationResponse {
  message: string;
}

export class MarkAsReadNotificationService {
  static async markAsReadNotification(
    markAsReadNotification: MarkAsReadNotificationRequest
  ): Promise<MarkAsReadNotificationResponse> {
    try {
      const response = await ecoTruekeApi.patch<MarkAsReadNotificationResponse>(
        "notification/mark-read",
        markAsReadNotification
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
