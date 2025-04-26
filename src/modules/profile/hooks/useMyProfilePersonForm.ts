import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { myProfilePersonFormSchema, myProfilePersonFormValues } from "../schemas/myProfileForm.schema";
import { useStore } from "@/stores/useStore";

export const useMyProfilePersonForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // person
    const person = useStore(state => state.person);

    const form = useForm<myProfilePersonFormValues>({
        resolver: zodResolver(myProfilePersonFormSchema),
        mode: 'onChange',
        defaultValues: {
            name: person.firstName ? person.firstName : '',
            paternalSurname: person.paternalSurname ? person.paternalSurname : '',
            maternalSurname: person.maternalSurname ? person.maternalSurname : '',
            gender: person.gender ? person.gender : undefined,
            documentType: person.documentType ? person.documentNumber : undefined,
            documentNumber: person.documentNumber ? person.documentNumber : '',
            phone: person.phone ? person.phone : '',
            address: person.address ? person.address : ''
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
