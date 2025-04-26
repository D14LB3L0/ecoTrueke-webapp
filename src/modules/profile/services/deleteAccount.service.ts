import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface DeleteAccountResponse {
    message: string
}

export class DeleteAccountService {
    static async DeleteAccount(): Promise<DeleteAccountResponse> {
        try {
            const response = await ecoTruekeApi.delete<DeleteAccountResponse>("auth");
            return response.data;
        }catch(error){
            throw error;
        }
    }
}