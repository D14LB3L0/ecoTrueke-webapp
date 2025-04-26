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
    const navigate = useNavigate();

    // user 
    const user = useStore(state => state.user);
    const setUser = useStore(state => state.setUser);

    // person
    const person = useStore(state => state.person);
    const setPerson = useStore(state => state.setPerson);

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
                email: values.email.trim(),
                password: values.password.trim()
            };

            // request API
            const response = await LoginService.login(loginRequest);
            if (response) {
                setUser({ ...user, token: response.data.token, email: response.data.user.email, accountStatus: response.data.user.accountStatus });
                setPerson({
                    ...person, firstName: response.data.person.firstName, paternalSurname: response.data.person.paternalSurname, maternalSurname: response.data.person.maternalSurname,
                    phone: response.data.person.phone, address: response.data.person.address, documentNumber: response.data.person.documentNumber, documentType: response.data.person.documentType,
                    gender: response.data.person.gender, profilePicture: response.data.person.profilePicture
                });
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
