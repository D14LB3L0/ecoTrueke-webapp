import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IPerson } from "@/interfaces/person.interface";
import { IUser } from "@/interfaces/user.interface";

export interface LoginResponseData {
    token: string;
    user: IUser
    person: IPerson
}

export interface LoginResponse {
    data: LoginResponseData;
    message: string;
}

export interface LoginRequest {
    email: string;
    password: string
}


export class LoginService {
    static async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await ecoTruekeApi.post<LoginResponse>("auth/login", loginRequest);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}