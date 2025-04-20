import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { myProfilePersonFormSchema, myProfilePersonFormValues } from "../schemas/myProfileForm.schema";

export const useMyProfilePersonForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<myProfilePersonFormValues>({
        resolver: zodResolver(myProfilePersonFormSchema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            paternalSurname: '',
            maternalSurname: '',
            gender: undefined,
            documentType: '',
            documentNumber: '',
            phoneNumber: '',
            address: undefined
        }
    })

    const handleSubmit = async (values: myProfilePersonFormValues) => {
        try {
            setIsLoading(true)
            console.log(values)
        } catch (error: any) {

        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        form,
        handleSubmit
    }
}
