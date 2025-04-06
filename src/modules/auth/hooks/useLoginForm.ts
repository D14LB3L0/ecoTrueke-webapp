import { useForm } from "react-hook-form"
import { loginFormSchema, loginFormValues } from "../schemas/loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useLoginForm = () => {

    const form = useForm<loginFormValues>({
        resolver: zodResolver(loginFormSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const handleSubmit = (data: loginFormValues) => {
        console.log(data)
    }

    return {
        form,
        handleSubmit
    }
}
