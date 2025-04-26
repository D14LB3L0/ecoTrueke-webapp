import { useForm } from "react-hook-form"
import { loginFormSchema, loginFormValues } from "../schemas/loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { LoginService } from "../services/login.service";
import { useStore } from "@/stores/useStore";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user = useStore(state => state.user);
    const setUser = useStore(state => state.setUser);
    const navigate = useNavigate();

    const form = useForm<loginFormValues>({
        resolver: zodResolver(loginFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    // login user
    const handleSubmit = async (values: loginFormValues) => {
        try {
            setIsLoading(true)

            // build request
            const loginRequest = {
                email: values.email,
                password: values.password
            };

            // request API
            const response = await LoginService.login(loginRequest);
            if (response) {
                setUser({ ...user, token: response.data.token, email: response.data.email, accountStatus: response.data.accountStatus });
                navigate("/home")
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
        handleSubmit,
        isLoading
    }
}
