import { useForm } from "react-hook-form"
import { loginFormSchema, loginFormValues } from "../schemas/loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { LoginUserService } from "../services/login.service";
import { useStore } from "@/stores/useStore";

export const useLoginForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user = useStore(state => state.user);
    const setUser = useStore(state => state.setUser);

    const form = useForm<loginFormValues>({
        resolver: zodResolver(loginFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const handleSubmit = async (values: loginFormValues) => {
        try {
            setIsLoading(true)
            // build request
            const loginRequest = {
                email: values.email,
                password: values.password
            };

            // request API
            const response = await LoginUserService.login(loginRequest);
            console.log(response)
            if (response)
                setUser({ ...user, token: response.data.token, id: response.data.id, email: response.data.token });
        } catch (error: any) {
            console.log(error?.response.data.message);
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
