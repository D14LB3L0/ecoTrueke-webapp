import { useForm } from "react-hook-form"
import { registerFormSchema, registerFormValues } from "../schemas/registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { toast } from "sonner"
import { Error } from "@/utils/constants/Error"
import { RegisterRequest, RegisterService } from "../services/register.service"
import { Success } from "@/utils/constants/Success"
import { useNavigate } from "react-router-dom"

export const useRegisterForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const form = useForm<registerFormValues>({
        resolver: zodResolver(registerFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            name: '',
            paternalSurname: '',
            maternalSurname: ''
        }
    })

    // register user 
    const handleSubmit = async (values: registerFormValues) => {
        try {
            setIsLoading(true);

            // build request
            const registerRequest: RegisterRequest = {
                name: values.name.trim(),
                paternalSurname: values.paternalSurname.trim(),
                maternalSurname: values.maternalSurname.trim(),
                email: values.email.trim(),
                password: values.password.trim(),
                confirmPassword: values.reEnterPassword.trim()
            }

            // request API
            const response = await RegisterService.register(registerRequest);
            if (response) {
                toast.dismiss();
                toast.success(response.message ?? Success.GENERIC)
                navigate("/auth/login")
            }

        } catch (error: any) {
            toast.dismiss();
            toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR)
        } finally {
            setIsLoading(false);
        }
    }

    return {
        form,
        handleSubmit,
        isLoading,
    }
}
