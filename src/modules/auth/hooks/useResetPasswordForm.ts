import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { resetPasswordFormSchema, resetPasswordFormValues } from "../schemas/resetPasswordForm.schema";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";
import { ResetPasswordService } from "../services/resetPassword.service";
import { Success } from "@/utils/constants/Success";

export const useResetPasswordForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const form = useForm<resetPasswordFormValues>({
        resolver: zodResolver(resetPasswordFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
        }
    })

    const handleSubmit = async (values: resetPasswordFormValues) => {
        try {
            setIsLoading(true)

            // build request 
            const resetPasswordRequest = {
                email: values.email
            }

            // request API
            const response = await ResetPasswordService.resetPassword(resetPasswordRequest);
            if (response) {
                toast.dismiss();
                toast.success(response.message ?? Success.GENERIC)
                navigate("/auth/login")
            }

        } catch (error: any) {
            toast.dismiss();
            toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        form,
        isLoading,
        handleSubmit
    }
}
