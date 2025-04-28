import { useState } from "react";
import { myProfileUserFormSchema, myProfileUserFormValues } from "../schemas/myProfileForm.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";
import { Success } from "@/utils/constants/Success";
import { ChangePasswordRequest, ChangePasswordService } from "../services/editUser.service";
import { DeleteAccountService } from "../services/deleteAccount.service";
import { useStore } from "@/stores/useStore";
import { useNavigate } from "react-router-dom";


export const useMyProfileUserForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openPopupDelete, setOpenPopupDelete] = useState<boolean>(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

    const navigate = useNavigate();

    const user = useStore(state => state.user);

    const form = useForm<myProfileUserFormValues>({
        resolver: zodResolver(myProfileUserFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: user.email ? user.email : '',
            password: ''
        }
    })

    const handleSubmit = async (values: myProfileUserFormValues) => {
        try {
            setIsLoading(true)

            // build request
            const changePasswordRequest: ChangePasswordRequest = {
                password: values.password.trim()
            }

            // request API
            const response = await ChangePasswordService.changePassword(changePasswordRequest);
            toast.dismiss();
            toast.success(response.message ?? Success.GENERIC)

        } catch (error: any) {
            toast.success(error?.response.data.message ?? Error.UNEXPECTED_ERROR)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmitDeleteAccount = async () => {
        try {
            setIsLoadingDelete(true)

            // request API
            const response = await DeleteAccountService.DeleteAccount();
            toast.dismiss();
            toast.success(response.message ?? Success.GENERIC)

            navigate("/");
            localStorage.clear();
            window.location.reload();

        } catch (error: any) {
            toast.dismiss();
            toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR)
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
