import { useForm } from "react-hook-form"
import { registerFormSchema, registerFormValues } from "../schemas/registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useRegisterForm = () => {

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

    const handleSubmit = (data: registerFormValues) => {
        console.log(data)
    }

    return {
        form,
        handleSubmit
    }
}
