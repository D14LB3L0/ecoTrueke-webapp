import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface ChangePasswordResponse {
    message: string
}

export interface ChangePasswordRequest {
    password: string
}

export class ChangePasswordService {
    static async changePassword(changePasswordRequest: ChangePasswordRequest): Promise<ChangePasswordResponse> {
        try {
            const response = await ecoTruekeApi.patch<ChangePasswordResponse>("user", changePasswordRequest)
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}