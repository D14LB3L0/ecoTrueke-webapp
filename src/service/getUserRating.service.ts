import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface GetUserRatingResponse {
  averageStars: number;
}

interface GetUserRatingDataResponse {
  data: GetUserRatingResponse;
  message: string;
}

export class GetUserRatingService {
  static async getUserRating(userId: string | undefined): Promise<GetUserRatingResponse> {
    try {
      const resposne = await ecoTruekeApi.get<GetUserRatingDataResponse>(
        `userRating/${userId}`
      );
      return resposne.data.data;
    } catch (error) {
      throw error;
    }
  }
}
