import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IPerson } from "@/interfaces/person.interface";

export interface EditPersonResponseData {
    person: IPerson;
}

export interface EditPersonResponse {
    data: EditPersonResponseData;
    message: string
}

export interface EditPersonRequest {
    profilePicture?: File | null;
    profilePictureRemove?: string
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    phone: string
    address: string;
    documentNumber: string;
    documentType: string;
    gender: string;
}



export class EditPersonService {
    static async editPersonService(editPersonRequest: EditPersonRequest): Promise<EditPersonResponse> {
        try {
            const formData = new FormData();
            // CASE 2: Upload new image
            if (editPersonRequest.profilePicture) {
                formData.append("profilePicture", editPersonRequest.profilePicture);
            }

            // CASE 2: Delete image
            if (editPersonRequest.profilePictureRemove !== undefined) {
                formData.append("profilePictureRemove", editPersonRequest.profilePictureRemove);
            }

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