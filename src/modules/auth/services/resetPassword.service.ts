import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface ResetPasswordResponse {
    message: string;
}

export interface ResetPasswordRequest {
    email: string;
}

export class ResetUserPasswordService {
    static async resetPassword(resetPasswordRequest: ResetPasswordRequest): Promise<ResetPasswordResponse> {
        try {
            const response = await ecoTruekeApi.post<ResetPasswordResponse>("auth/reset-password", resetPasswordRequest);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}