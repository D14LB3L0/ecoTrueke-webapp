import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { myProfilePersonFormSchema, myProfilePersonFormValues } from "../schemas/myProfileForm.schema";
import { useStore } from "@/stores/useStore";
import { EditPersonRequest, EditPersonService } from "../services/editPerson.service";
import { toast } from "sonner";
import { Success } from "@/utils/constants/Success";
import { Error } from "@/utils/constants/Error";

export const useMyProfilePersonForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // person
    const person = useStore(state => state.person);
    const setPerson = useStore(state => state.setPerson);

    const [previewUrl, _] = useState<string | undefined>(
        person.profilePicture
            ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${person.profilePicture}`
            : undefined
    );

    const form = useForm<myProfilePersonFormValues>({
        resolver: zodResolver(myProfilePersonFormSchema),
        mode: 'onChange',
        defaultValues: {
            profilePicture: undefined,
            name: person.name ? person.name : '',
            paternalSurname: person.paternalSurname ? person.paternalSurname : '',
            maternalSurname: person.maternalSurname ? person.maternalSurname : '',
            gender: person.gender ? person.gender : undefined,
            documentType: person.documentType ? person.documentType : undefined,
            documentNumber: person.documentNumber ? person.documentNumber : '',
            phone: person.phone ? person.phone : '',
            address: person.address ? person.address : ''
        }
    })


    const handleSubmit = async (values: myProfilePersonFormValues) => {
        try {
            setIsLoading(true)
            let editPersonRequest: EditPersonRequest = {
                name: values.name.trim() ?? '',
                paternalSurname: values.paternalSurname.trim() ?? '',
                maternalSurname: values.maternalSurname.trim() ?? '',
                gender: values.gender?.trim() ?? '',
                documentType: values.documentType.trim() ?? '',
                documentNumber: values.documentNumber.trim() ?? '',
                phone: values.phone.trim() ?? '',
                address: values.address?.trim() ?? ''
            };

            // CASE 1: Upload new image
            if (values.profilePicture instanceof File) {
                editPersonRequest.profilePicture = values.profilePicture;
            }
            // CASE 2: Delete image
            else if (values.profilePicture === null) {
                editPersonRequest.profilePictureRemove = "true";
            }
            // CASE 3: No changes
            else {
            }

            const response = await EditPersonService.editPersonService(editPersonRequest);
            if (response) {
                toast.dismiss();
                toast.success(response.message ?? Success.GENERIC)
                setPerson({ ...person, ...response.data.person });
            }

        } catch (error: any) {
            toast.dismiss();
            toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        form,
        handleSubmit,
        person,
        previewUrl
    }
}
