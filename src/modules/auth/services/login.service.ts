import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface LoginResponseData {
    token: string;
    id: string;
    email: string;
}

export interface LoginResponse {
    data: LoginResponseData;
    message: string;
}


export class LoginUserService {
    static async login(loginRequest: { email: string; password: string }): Promise<LoginResponse> {
        try {
            const response = await ecoTruekeApi.post<LoginResponse>("auth/login", loginRequest);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}