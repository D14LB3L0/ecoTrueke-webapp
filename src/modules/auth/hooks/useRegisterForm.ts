import { useForm } from "react-hook-form"
import { registerFormSchema, registerFormValues } from "../schemas/registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export const useRegisterForm = () => {

    // open subscription plans dialog
    const [openSubscriptionPLans, setOpenSubscriptionPLans] = useState<boolean>(false);

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

    // register user but doesn't enter the platform until choise a plan
    const handleSubmit = (data: registerFormValues) => {
        console.log(data) 
        setOpenSubscriptionPLans(true)
    }

    return {
        form,
        handleSubmit,
        openSubscriptionPLans,
        setOpenSubscriptionPLans
    }
}
