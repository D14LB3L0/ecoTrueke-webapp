import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface RegisterResponse {
    message: string;
}

export interface RegisterRequest {
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export class RegisterUserService {
    static async register(registerRequest: RegisterRequest): Promise<RegisterResponse> {
        try {
            const response = await ecoTruekeApi.post<RegisterResponse>("auth/register", registerRequest);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}