import { useState } from "react";
import { myProfileUserFormSchema, myProfileUserFormValues } from "../schemas/myProfileForm.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useMyProfileUserForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openPopupDelete, setOpenPopupDelete] = useState<boolean>(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

    const form = useForm<myProfileUserFormValues>({
        resolver: zodResolver(myProfileUserFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async (values: myProfileUserFormValues) => {
        try {
            setIsLoading(true)
            console.log(values)
        } catch (error: any) {

        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmitDeleteAccount = async () => {
        try {
            setIsLoadingDelete(true)

        } catch {

        } finally {
            setOpenPopupDelete(false)
            setIsLoadingDelete(false)
        }
    }

    return {
        isLoading,
        form,
        handleSubmit,
        openPopupDelete,
        setOpenPopupDelete,
        handleSubmitDeleteAccount,
        isLoadingDelete
    }
}
