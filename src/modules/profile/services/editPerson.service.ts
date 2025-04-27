import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IPerson } from "@/interfaces/person.interface";

export interface EditPersonResponseData {
    person: IPerson;
}

export interface EditPersonResponse {
    data: EditPersonResponseData;
    message: string
}

export interface editPersonRequest {
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    phone: string
    address: string;
    documentNumber: string;
    documentType: string;
    gender: string;
    // profilePicture: string;
}



export class EditPersonService {
    static async editPersonService(editPersonRequest: editPersonRequest): Promise<EditPersonResponse> {
        try {
            const formData = new FormData();
            formData.append("name", editPersonRequest.name);
            formData.append("paternalSurname", editPersonRequest.paternalSurname);
            formData.append("maternalSurname", editPersonRequest.maternalSurname);
            formData.append("gender", editPersonRequest.gender ?? '');
            formData.append("documentType", editPersonRequest.documentType ?? '');
            formData.append("documentNumber", editPersonRequest.documentNumber);
            formData.append("phone", editPersonRequest.phone);
            formData.append("address", editPersonRequest.address ?? '');
            
            const response = await ecoTruekeApi.put<EditPersonResponse>("person", formData);
            
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}