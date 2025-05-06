import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface markAsReadNotificationRequest {
  notificationIds: string[];
}

interface markAsReadNotificationResponse {
  message: string;
}

export class MarkAsReadNotificationRequest {
  static async markAsReadNotification(
    markAsReadNotification: markAsReadNotificationRequest
  ): Promise<markAsReadNotificationResponse> {
    try {
      const response = await ecoTruekeApi.patch<markAsReadNotificationResponse>(
        "notification/mark-read",
        markAsReadNotification
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
