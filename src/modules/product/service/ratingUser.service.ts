import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface RatingUserRequest {
  proposerUserId: string;
  proposalId: string;
  stars: number;
}

export interface RatingUserResponse {
  message: string;
}

export class RatingUserService {
  static async ratingUser(
    ratingUserRequest: RatingUserRequest
  ): Promise<RatingUserResponse> {
    try {
      const response = await ecoTruekeApi.post<RatingUserResponse>(
        "userRating",
        ratingUserRequest
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
